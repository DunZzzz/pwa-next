/* emilien <emilien@emilien-lx>, 2021 */

import React, { useState, useEffect } from 'react';
import tw from 'twin.macro';
import nanoid from 'nanoid';
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
	const [id, setId] = useState(null);


	useEffect(() => setId(nanoid()), []);

	return (
		<div tw="flex flex-col gap-1">
			<Label htmlFor={id} label={label} required={required} />
			<input
				id={id}
				tw="rounded border border-gray-300 focus:outline-none h-12 focus:border-brand-purple-400 focus:bg-gray-50 pl-2"
				type={type}
				name={name}
				placeholder={placeholder}
				maxLength={maxLength}
			/>
		</div>
	);
}
