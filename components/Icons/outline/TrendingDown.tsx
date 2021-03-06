import * as React from 'react';

function SvgTrendingDown(props: React.SVGProps<SVGSVGElement>) {
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
				d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
			/>
		</svg>
	);
}

export default SvgTrendingDown;
