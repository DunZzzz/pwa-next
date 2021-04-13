/* emilien <emilien@emilien-pc>, 2021 */

import UiTextArea from './index';

export default {
	title: 'ui/TextArea',
	component: UiTextArea,
	argTypes: {
		rows: { control: 'number' },
		maxlength: { control: 'number' },
		label: { control: 'text' },
		name: { control: 'text' },
		error: { control: 'boolean' },
		placeholder: { control: 'text' },
		required: { control: 'boolean' }
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { UiTextArea },
	template: '<ui-text-area v-bind="$props" />'
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

export const Error = Template.bind({});
Error.args = {
	label: 'Erronous field',
	error: true
};
