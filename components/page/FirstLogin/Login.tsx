/* emilien <emilien@emilien-lx>, 2021 */

import React from 'react';
import Link from 'next/link';
import { CommonHead } from '@/components/static/CommonHead';
import { Form } from '@/components/static/Form';
import { Input } from '@/components/static/Input';
import { Button } from '@/components/static/Button';
import { SimplePageContainer } from '@/components/static/SimplePageContainer';
import 'twin.macro';

interface ILogin {}

export function Login({}: ILogin) {
	return (
		<SimplePageContainer>
			<CommonHead
				title="Add your inbox"
				description="Start using the app by adding a new user to your account !"
			/>
			<Form>
				<Input label="Name" placeholder="John" />
				<Input label="Email" placeholder="john.doe@mail.com" />
				<Input label="Password" placeholder="*****" />
				<Link href="/first-login?step=provider">
					<Button size="lg" tw="mt-1">Continue</Button>
				</Link>
			</Form>
		</SimplePageContainer>
	);
}

export default Login;
