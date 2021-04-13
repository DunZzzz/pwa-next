/* emilien <emilien@emilien-lx>, 2021 */

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from './index';

export default {
	title: 'Example/Button',
	component: Button,
	argTypes: {},
} as Meta;

const Template: Story = (args) => <Button {...args}>{args.label}</Button>;

export const Default = Template.bind({});
Default.args = {
	label: 'Button',
	test: 123,
};

export const Primary = Template.bind({});
Primary.args = {
	label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button',
	type: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
	label: 'Button',
	size: 'lg',
};

export const Small = Template.bind({});
Small.args = {
	label: 'Button',
	size: 'sm',
};
