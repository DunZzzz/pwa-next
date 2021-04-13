
<template>
	<span>
		<span v-if="typeof content === 'string'">{{ content }}</span>
		<span v-else-if="Array.isArray(content)">
			<ui-smart-span v-for="(c, idx) in content" :key="idx" :content="c" />
		</span>
		<formatter v-else-if="typeof content === 'object'" v-bind="content" />
	</span>
</template>

<script>
import Formatter from './Formatter';

export default {
	name: 'UiSmartSpan',
	components: { Formatter },
	props: {
		content: {
			type: [String, Object, Array]
		}
	},
};
</script>

<style scoped>
</style>
