/* emilien <emilien@emilien-pc>, 2021 */

import UiListItem from './index';

export default {
	title: 'ui/ListItem',
	component: UiListItem,
	argTypes: {
		bulletColor: { control: 'text' },
		text: { control: 'text' }
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { UiListItem },
	template: '<ui-list-item v-bind="$props" />'
});

export const Standard = Template.bind({});
Standard.args = {
	text: 'Demo text!'
};

export const Purple = Template.bind({});
Purple.args = {
	text: 'Purple rain, purple rain',
	bulletColor: 'brand-purple-400'
};
