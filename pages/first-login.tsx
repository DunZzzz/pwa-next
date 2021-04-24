/* emilien <emilien@emilien-lx>, 2021 */

import React, { useState, useEffect } from 'react';
import { CommonHead } from '@/components/static/CommonHead';
import { Form } from '@/components/static/Form';
import { SimplePageContainer } from '@/components/static/SimplePageContainer';
import { LoadingPage } from '@/components/page/LoadingPage';
import 'twin.macro';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const LoginPage = dynamic(() =>
	import('@/components/page/FirstLogin/Login').then(mod => mod.Login),
);
const EmailProvider = dynamic(() =>
	import('@/components/page/FirstLogin/EmailProvider').then(
		mod => mod.EmailProvider,
	),
);
interface IFirstLogin {}

export function FirstLogin({}: IFirstLogin) {
	const router = useRouter();
	const { step } = router.query;
	const [ form, setForm ] = useState({});

	useEffect(() => {
		console.log(form);
	}, [form]);

	switch (step) {
		case undefined:
		case 'login':
			return <LoginPage updateForm={(data) => setForm({ ...form, ...data })} />;
		case 'provider':
			return <EmailProvider updateForm={(data) => setForm({ ...form, ...data })} />;
		default:
			router.push('/first-login');
			return <LoadingPage />
	}
}

export default FirstLogin;
