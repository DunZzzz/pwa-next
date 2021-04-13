/* emilien <emilien@emilien-pc>, 2021 */

import UiHeroicon from './index';

export default {
	title: 'ui/Icon',
	component: UiHeroicon,
	argTypes: {
		small: { control: 'boolean' },
		large: { control: 'boolean' },
		type: { control: 'text' },
		name: { control: 'string' },
		color: { control: 'color' }
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { UiHeroicon },
	template: '<ui-heroicon v-bind="$props" />'
});

export const Standard = Template.bind({});
Standard.args = {
	name: 'check-circle'
};

export const Small = Template.bind({});
Small.args = {
	name: 'check-circle',
	small: true
};

export const Large = Template.bind({});
Large.args = {
	name: 'check-circle',
	large: true
};

export const TestSmallEvenIfLargeActive = Template.bind({});
TestSmallEvenIfLargeActive.args = {
	name: 'check-circle',
	large: true,
	small: true
};
