/* emilien <emilien@emilien-pc>, 2021 */

import UiTitle from './index';

export default {
	title: 'ui/Title',
	component: UiTitle,
	argTypes: {
		light: { control: 'boolean' },
		size: { control: { type: 'select', options: ['sm', 'md', 'lg'] }}
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { UiTitle },
	template: '<ui-title v-bind="$props" />'
});

export const Standard = Template.bind({});
Standard.args = {};
