import * as React from 'react';

function SvgArrowNarrowDown(props: React.SVGProps<SVGSVGElement>) {
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
				d="M16 17l-4 4m0 0l-4-4m4 4V3"
			/>
		</svg>
	);
}

export default SvgArrowNarrowDown;
