import * as React from 'react';

function SvgLightningBolt(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M13 10V3L4 14h7v7l9-11h-7z"
			/>
		</svg>
	);
}

export default SvgLightningBolt;
