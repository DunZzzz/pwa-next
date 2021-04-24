/* emilien <emilien@emilien-lx>, 2021 */

const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const levelup = require('levelup');
const _ = require('lodash');
const leveldown = require('leveldown');
const morgan = require('morgan');
const { v4: $uid } = require('uuid');
const nodemailer = require('nodemailer');
var imaps = require('imap-simple');
const simpleParser = require('mailparser').simpleParser;

var db = levelup(leveldown('./storage'));

const PORT = process.env.PORT || 80;
const IS_DEV = ['debug', 'development'].includes(process.env.NODE_ENV);
const $put = (a, b) => db.put(a, JSON.stringify(b));
const $get = a => db.get(a).then(x => JSON.parse(x));
const $del = a => db.del(a);

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const _debug = console.log;

/** Valid scheme to be used for authentification.  */
const authScheme = {
	/** Simplest auth type: return the user associated with the key.  */
	'Custom-0': data => $get(`userData-${data}`),
};

const authenticate = req =>
	new Promise((res, rej) => {
		const { authorization } = req.headers;
		if (!authorization) rej('Authorization field is required.');

		const data = authorization.split(' ').filter(x => x.length);
		if (data.length != 2) rej('Invalid Authorization field.');

		const scheme = authScheme[data[0]];
		if (!scheme) rej('Invalid Authorization auth scheme.');

		scheme(data[1])
			.then(x => {
				if (x) res(x);
				else throw new Error('');
			})
			.catch(_ => rej('Authorization failed.'));
	});

/**
 * getUserID.
 * This is not a safe way to set an id but will suffice for this demo server.
 * Trouble arise on mail/password change.
 *
 * @param mail - Mail of the user.
 * @param password - Password of the user before encryption.
 */
const getUserId = ({ mail, password }) => _encode(`${mail}--${password}`);

/**
 * Encode a string using the desired encryption algorithm.
 *
 * @param str - String to encrypt.
 * @param algo - Algo use to encrypt str (sha256, sha1, sha512).
 * @param len - Desired length (-1 for full size)
 */
const _encode = (str, algo = 'sha256', len = -1) =>
	crypto.createHash(algo).update(str).digest('base64').slice(0, len);

/**
 * Login form.
 *
 * @param req.body.name - username.
 * @param req.body.mail - mail address of the user.
 * @param req.body.password - password.
 * @param req.body.mail_provider - IMAP&SMTP server address.
 */
app.post('/login', async (req, res) => {
	const { name, mail, password, mail_provider } = req.body;

	try {
		const id = getUserId({ mail, password });

		await $put(`userData-${id}`, {
			name,
			mail,
			password,
			mail_provider,
		});
		res.json({ id });
	} catch (e) {
		_debug(e);
		res.sendStatus(500);
	}
});

/** Get user data.  */
app.get('/user', async (req, res) => {
	try {
		const { name, mail, mail_provider } = await authenticate(req);
		res.json({ name, mail, password, mail_provider });
	} catch (e) {
		console.error(e);
		res.status(401).json(e);
	}
});

/** Send a mail to custom address.  */
app.post('/send-mail', async (req, res) => {
	const { recipient, subject, text_body } = req.body;

	try {
		const { password, mail, mail_provider } = await authenticate(req);

		// DOC: https://nodemailer.com/extras/smtp-connection/
		var smtp = nodemailer.createTransport({
			host: mail_provider,
			port: 587,
			logger: IS_DEV,
			debug: IS_DEV,
			auth: {
				user: mail,
				pass: password,
			},
		});

		smtp.sendMail(
			{
				from: mail,
				to: recipient,
				subject,
				text: text_body,
			},
			(err, info) => {
				if (err) {
					console.error(err);
					res.status(406).json(err);
				} else {
					res.json(info);
				}
			},
		);
	} catch (e) {
		console.error(e);
		// We always send 401 which is not very explicit.
		res.status(401).json(e);
	}
});

/** List email of the user.  */
app.get('/list-mail', async (req, res) => {
	const { password, mail, mail_provider } = await authenticate(req);

	var config = {
		imap: {
			user: mail,
			password: password,
			host: mail_provider,
			port: 993,
			tls: true,
			authTimeout: 3000,
		},
	};

	try {
		const connection = await imaps.connect(config);
		await connection.openBox('INBOX');

		// Fetch emails from the last 24h
		const yesterday = new Date();
		yesterday.setTime(Date.now() - 24 * 3600 * 1000);

		// retrieve only the headers of the messages
		const list = await connection.search(
			['ALL', ['SINCE', yesterday.toISOString()]],
			{
				bodies: ['HEADER', 'TEXT', ''],
			},
		);

		list.forEach(function (item) {
			var all = _.find(item.parts, { which: '' });
			var id = item.attributes.uid;
			var idHeader = 'Imap-Id: ' + id + '\r\n';
			simpleParser(idHeader + all.body, (err, mail) => {
				// access to the whole mail object
				console.log(mail);
			});
		});
	} catch (e) {
		console.error(e);
		// We always send 401 which is not very explicit.
		res.status(401).json(e);
	}
});

app.listen(PORT, () => _debug(`Serving: http://localhost:${PORT}/`));
