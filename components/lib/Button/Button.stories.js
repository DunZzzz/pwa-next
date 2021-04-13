/* emilien <emilien@emilien-pc>, 2021 */

import MyButton from './index';

export default {
	title: 'ui/Button',
	component: MyButton,
	argTypes: {
		size: { control: { type: 'select', options: ['small', 'medium', 'large'] }},
		type: { control: { type: 'select', options: ['primary', 'secondary', 'light'] }}
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { MyButton },
	template: '<my-button @onClick="onClick" v-bind="$props" />'
});

export const Primary = Template.bind({});
Primary.args = {
	type: 'primary',
	label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button'
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Button'
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Button'
};
