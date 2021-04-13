/* emilien <emilien@emilien-pc>, 2021 */

import UiLabel from './index';

export default {
	title: 'ui/Label',
	component: UiLabel,
	argTypes: {
		label: { control: 'text' },
		inputId: { control: 'text' },
		required: { control: 'boolean' }
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { UiLabel },
	template: '<ui-label v-bind="$props" />'
});

export const Standard = Template.bind({});
Standard.args = {
	label: 'Standard label'
};

export const Required = Template.bind({});
Required.args = {
	required: true,
	label: 'Required field'
};
