/* emilien <emilien@emilien-pc>, 2021 */

import UiCommonHead from './index';

export default {
	title: 'ui/CommonHead',
	component: UiCommonHead,
	argTypes: {
		centered: { control: 'boolean' },
		previous: { control: 'boolean' },
		title: { control: 'text' },
		description: { control: 'text' },
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { UiCommonHead },
	template: '<ui-common-head v-bind="$props" />'
});

export const Standard = Template.bind({});
Standard.args = {
	title: 'Let\'s start mailing!',
	description: [
		'The most effective web based reader you',
		{ classes: 'whitespace-nowrap', text: ' will ever find!' }
	]
};

