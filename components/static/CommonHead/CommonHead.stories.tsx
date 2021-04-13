/* emilien <emilien@emilien-lx>, 2021 */

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CommonHead } from './index';

export default {
	title: 'Example/CommonHead',
	component: CommonHead,
	argTypes: {},
} as Meta;

const Template: Story = args => <CommonHead {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'My Title',
	description: 'Ex scriptorem ea mel duo erat tota tellus nisi lobortis congue donec ius. Mi mucius perpetua tincidunt pro altera assum.',
};
