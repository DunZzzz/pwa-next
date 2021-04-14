/* emilien <emilien@emilien-lx>, 2021 */

import React from 'react';
import Link from 'next/link';
import { CommonHead } from '@/components/static/CommonHead';
import { BackgroundLogo } from '@/components/static/BackgroundLogo';
import { BulletItem } from '@/components/static/BulletItem';
import { theme } from 'twin.macro';
import { Icon } from '@/components/static/Icon';
import { ArrowRight } from '@/components/Icons/outline';
import 'twin.macro';

interface IOnboarding {}

export function Onboarding({}: IOnboarding) {
	return (
		<div>
			<BackgroundLogo />
			<CommonHead
				title="Let’s start mailing!"
				description="The most effective web based mail reader you will ever find!"
				centered={true}
			/>
			<div tw="flex items-center gap-12 my-16 flex-col">
				<BulletItem bulletColor={theme`colors.brand-purple.400`}>
					Offline mail reading
				</BulletItem>
				<BulletItem bulletColor={theme`colors.brand-pink.400`}>
					Entirely Free!
				</BulletItem>
				<BulletItem bulletColor={theme`colors.brand-yellow.400`}>
					We don’t share your data
				</BulletItem>
				<BulletItem bulletColor={theme`colors.brand-orange.400`}>
					No ads!
				</BulletItem>
			</div>
			<Link href="/first-login">
			<a tw="flex gap-1 items-center justify-center text-brand-blue-400 text-xl cursor-pointer">
					<span>Sound's good let's start!</span>
					<ArrowRight />
				</a>
			</Link>
		</div>
	);
}

export default Onboarding;
