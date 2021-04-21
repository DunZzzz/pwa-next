/* emilien <emilien@emilien-lx>, 2021 */

import React from 'react';
import { theme } from 'twin.macro';
import { BackgroundLogo } from '@/components/static/BackgroundLogo';

const _Splash = () => (
	<BackgroundLogo
		backgroundColor={theme`colors.brand-purple.400`}
		opacity={1}
	/>
);

export default function Home() {
	return (
		<_Splash />
	);
}

