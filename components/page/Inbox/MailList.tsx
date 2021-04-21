/* emilien <emilien@emilien-lx>, 04/2021 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MailCard } from './MailCard';
import { fetchMailList, getMailList, getMailStatus } from '@/src/store/emails';
import { useRouter } from 'next/router';
import 'twin.macro';

interface IMailList {}

export function MailList({}: IMailList) {
	const dispatch = useDispatch();
	const mailList = useSelector(getMailList);
	const mailStatus = useSelector(getMailStatus);
	const router = useRouter();

	useEffect(() => {
		if (mailStatus === 'idle') {
			dispatch(fetchMailList());
		}
	}, [dispatch, mailStatus]);

	if (mailStatus === 'loading') {
		return <p tw="text-center"> Loading </p>;
	} else if (mailStatus === 'failed') {
		return <p tw="text-center"> Got an Error! </p>;
	}

	const openMail = id => router.push(`/inbox/mail`);

	let list = [];

	for (let item of mailList) {
		list.push(
			<MailCard key={item.id} {...item} onClick={id => openMail(id)} />,
		);
	}

	return <div>{list}</div>;
}

export default MailList;
