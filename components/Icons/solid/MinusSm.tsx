import * as React from 'react';

function SvgMinusSm(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

export default SvgMinusSm;
