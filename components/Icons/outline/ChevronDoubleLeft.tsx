import * as React from 'react';

function SvgChevronDoubleLeft(props: React.SVGProps<SVGSVGElement>) {
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
				d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
			/>
		</svg>
	);
}

export default SvgChevronDoubleLeft;
