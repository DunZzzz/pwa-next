import * as React from 'react';

function SvgPause(props: React.SVGProps<SVGSVGElement>) {
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
				d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	);
}

export default SvgPause;
