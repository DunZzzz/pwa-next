/* emilien <emilien@emilien-lx>, 2021 */

import React from 'react';
import { lazy } from '@src/lazy';
import tw, { styled, css } from 'twin.macro';

const _Template = tw.button`
	rounded-lg font-bold border-0 cursor-pointer inline-block
	flex flex-row justify-center items-center gap-1
`;

export const buttonSize = {
	sm: lazy(() => tw`text-xs tracking-wide py-2 px-4`),
	md: lazy(() => tw`text-sm py-2.5 px-10`),
	lg: lazy(() => tw`text-sm py-3.5 px-12`),
};

console.log(buttonSize);

export const buttonType = {
	primary: lazy(() => tw`bg-brand-purple-400 text-white`),
	secondary: lazy(() => [
		css`
			box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
		`,
		tw`bg-opacity-0 text-gray-700`,
	]),
	light: lazy(() => tw`bg-white text-gray-900`),
};

interface IButton {
	type: keyof buttonType;
	size: keyof buttonSize;
}

export const Button = styled(_Template)(({ type = 'primary', size = 'md' }) => [
	buttonType[type](),
	buttonSize[size](),
]);
