/* emilien <emilien@emilien-lx>, 2021 */

import React from 'react';
import { CommonHead } from '@/components/static/CommonHead';
import { Form } from '@/components/static/Form';
import { Input } from '@/components/static/Input';
import { Checkbox } from '@/components/static/Checkbox';
import { Button } from '@/components/static/Button';
import Link from 'next/link';
import { SimplePageContainer } from '@/components/static/SimplePageContainer';
import 'twin.macro';

interface IEmailProvider {}

export function EmailProvider({}: IEmailProvider) {
	return (
		<SimplePageContainer>
			<CommonHead
				title="Add your email provider"
				description="Start using the app by adding a new user to your account"
				previousBtn={ true }
				previousAction="/first-login"
			/>
			<Form>
				<Input label="Server (IMAP/SMTP)" placeholder="mail.privateemail.com" />
				<Checkbox label="Use same name and password." />
				<Checkbox label="Advanced IMAP/SMTP settings." />
				<Link href="/inbox">
					<Button size="lg" tw="mt-1">Continue</Button>
				</Link>
			</Form>
		</SimplePageContainer>
	);
}

export default EmailProvider;
