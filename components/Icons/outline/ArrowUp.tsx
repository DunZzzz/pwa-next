import * as React from 'react';

function SvgArrowUp(props: React.SVGProps<SVGSVGElement>) {
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
				d="M5 10l7-7m0 0l7 7m-7-7v18"
			/>
		</svg>
	);
}

export default SvgArrowUp;
