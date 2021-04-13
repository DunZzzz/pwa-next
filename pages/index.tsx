/* emilien <emilien@emilien-lx>, 2021 */

import React from 'react';
import tw, { css, styled } from 'twin.macro';

const Title = styled.h1`${tw`text-blue-500`}`;

const h1_css = css`${tw`text-blue-500`}`;

const Title2 = ({ children }) => <h1 tw="text-blue-500">{ children }</h1>;

const Title3 = ({ children }) => <h1 css={ h1_css }>{ children }</h1>;

export default function Home() {
	return (
		<div>
			<Title>
				My page
			</Title>
			<Title2>
				My page
			</Title2>
			<Title3>
				My page
			</Title3>
		</div>
	);
}

