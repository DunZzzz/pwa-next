/* emilien <emilien@emilien-lx>, 2021 */

import React from 'react';
import tw, { css, styled } from 'twin.macro';

//export interface ButtonProps
//extends React.HTMLAttributes<HTMLElement>,
//BsPrefixPropsWithChildren {
//active?: boolean;
//block?: boolean;
//variant?: ButtonVariant;
//size?: 'sm' | 'lg';
//type?: ButtonType;
//href?: string;
//disabled?: boolean;
//target?: any;
//}

export const Button = styled.button`${tw`rounded-lg font-bold border-0 cursor-pointer inline-block flex flex-row justify-center items-center gap-1 bg-brand-purple-400 text-white`}`;

