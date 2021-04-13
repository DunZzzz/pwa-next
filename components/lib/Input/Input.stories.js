/* emilien <emilien@emilien-pc>, 2021 */

import UiInput from './index';

export default {
	title: 'ui/Input',
	component: UiInput,
	argTypes: {
		label: { control: 'text' },
		name: { control: 'text' },
		type: { control: 'text' },
		placeholder: { control: 'text' },
		required: { control: 'boolean' }
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { UiInput },
	template: '<ui-input v-bind="$props" />'
});

export const Standard = Template.bind({});
Standard.args = {
	label: 'Standard input field'
};

export const Required = Template.bind({});
Required.args = {
	required: true,
	label: 'Required field'
};

export const Placeholder = Template.bind({});
Placeholder.args = {
	label: 'Some placeholder',
	placeholder: 'Some placeholder'
};

export const Password = Template.bind({});
Password.args = {
	label: 'Password',
	required: true,
	type: 'password'
};

export const Error = Template.bind({});
Error.args = {
	label: 'Password',
	error: true
};
