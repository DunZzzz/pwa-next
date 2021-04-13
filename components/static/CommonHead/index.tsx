/* emilien <emilien@emilien-lx>, 2021 */

import React, { ReactChild } from 'react';
import { Icon } from '@components/static/Icon';
import { ArrowLeft } from '@components/Icons/outline/';

/**
 * ICommonHead.
 */
interface ICommonHead {
	/** Show the "previous page" button above the title.  */
	previousButton: boolean;
	title: ReactChild;
	description: ReactChild;
}

/**
 * Common page header with title, description and an optional previous page button (viewable on login page)
 */
export function CommonHead({
	previousButton,
	title,
	description,
}: ICommonHead) {
	return (
		<div>
			<div className="h-14 flex items-center">
				<div className="flex items-center text-gray-600">
					<Icon size="md" icon={<ArrowLeft />} />
					<p className="ml-2 text-xl font-semibold tracking-wide leading-none">
						Back
					</p>
				</div>
			</div>
			<div className="mt-6 text-center">
				<h1 className="text-3xl font-bold tracking-wide">{title}</h1>
				<p className="mt-4 text-gray-600 tracking-wide">
					{description}
				</p>
			</div>
		</div>
	);
}

//<template>
//</template>

//<script>
//export default {
//name: 'UiCommonHead',
//props: {
//title: { type: String },
//description: { type: [ String, Array, Object ] },
//light: {
//type: Boolean,
//default: false
//},
//size: {
//type: String,
//default: 'md',
//validator: v => ['sm', 'md', 'lg'].includes(v)
//}
//},
//};
//</script>

//<style scoped>
//</style>
//title: { type: String },
//description: { type: [ String, Array, Object ] },
//light: {
//type: Boolean,
//default: false
//},
//size: {
//type: String,
//default: 'md',
//validator: v => ['sm', 'md', 'lg'].includes(v)
//}
//},
//};
//</script>

//<style scoped>
//</style>
//title: { type: String },
//description: { type: [ String, Array, Object ] },
//light: {
//type: Boolean,
//default: false
//},
//size: {
//type: String,
//default: 'md',
//validator: v => ['sm', 'md', 'lg'].includes(v)
//}
//},
//};
//</script>

//<style scoped>
//</style>
//title: { type: String },
//description: { type: [ String, Array, Object ] },
//light: {
//type: Boolean,
//default: false
//},
//size: {
//type: String,
//default: 'md',
//validator: v => ['sm', 'md', 'lg'].includes(v)
//}
//},
//};
//</script>

//<style scoped>
//</style>
