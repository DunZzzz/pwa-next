/* emilien <emilien@emilien-lx>, 2021 */

import React, { useState } from 'react';
import tw from 'twin.macro';
import { uid } from '@/src/utils';
import { Label } from '@/components/static/Label';

interface IInput {
	label: string;
	required?: boolean;
	type?: string;
	name: string;
	placeholder?: string;
	maxLength?: number;
}

export function Input({
	label,
	required = false,
	type = 'text',
	name,
	placeholder = '',
	maxLength,
}: IInput) {
	const _uid = useState(() => uid());

	return (
		<div tw="flex flex-col gap-1">
			<Label htmlFor={_uid} label={label} required={required} />
			<input
				id={_uid}
				tw="rounded-t-md border-0 border-b focus:outline-none focus:border-brand-purple-400 focus:bg-gray-50 pb-1 pt-1 pl-2"
				type={type}
				name={name}
				placeholder={placeholder}
				maxLength={maxLength}
			/>
		</div>
	);
}
