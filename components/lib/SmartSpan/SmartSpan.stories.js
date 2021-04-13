/* emilien <emilien@emilien-pc>, 2021 */

import UiSmartSpan from './index';

export default {
	title: 'ui/SmartSpan',
	component: UiSmartSpan,
	argTypes: {
		content: { control: 'json' },
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { UiSmartSpan },
	template: '<ui-smart-span v-bind="$props" />'
});

export const Standard = Template.bind({});
Standard.args = {
	content: 'Can\'t be much more standard than this standard text'
};

export const ArrayFmtSimple = Template.bind({});
ArrayFmtSimple.args = {
	content: ['Simple text inside an array']
};

export const ObjectFmt = Template.bind({});
ObjectFmt.args = {
	content: { text: 'Object formatting' }
};

export const CapitalizeFmt = Template.bind({});
CapitalizeFmt.args = {
	content: { text: 'i should be in capital letter', filters: [ 'uppercase' ] }
};

export const ArrayFmtComplex = Template.bind({});
ArrayFmtComplex.args = {
	content: [
		'I start here, ',
		{ text: 'and I end up here' }
	]
};

export const ClassesForColor = Template.bind({});
ClassesForColor.args = {
	content: [
		{ classes: 'font-bold text-red-500', text: 'Rainbow ' },
		{ classes: 'font-bold text-orange-500', text: 'text ' },
		{ classes: 'font-bold text-yellow-500', text: 'color ' },
		{ classes: 'font-bold text-green-500', text: '!!!' }
	]
};
