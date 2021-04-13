/* emilien <emilien@emilien-pc>, 2021 */

import UiFancyRadio from './index';

export default {
	title: 'ui/FancyRadio',
	component: UiFancyRadio,
	argTypes: {
		label: { control: 'text' },
		fields: { control: 'array' },
		required: { control: 'boolean' }
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { UiFancyRadio },
	template: '<ui-fancy-radio v-bind="$props" />'
});

const fields = [
	{ name: 'general', label: 'General' },
	{ name: 'sponsoring', label: 'Sponsoring' },
	{ name: 'bug', label: 'Found a bug?' }
];

export const Standard = Template.bind({});
Standard.args = {
	label: 'Standard input field',
	fields
};

export const Required = Template.bind({});
Required.args = {
	label: 'Required field',
	required: true,
	fields
};
