
<template>
	<div>
		<div class="h-14 flex items-center">
			<div class="flex items-center text-gray-600">
				<ui-heroicon name="arrow-left" />
				<p class="ml-2 text-xl font-semibold tracking-wide">Back</p>
			</div>
		</div>
		<div class="mt-6 text-center">
			<h1 class="text-3xl font-bold tracking-wide">
				{{ title }}
			</h1>
			<p class="mt-4 text-gray-600 tracking-wide">
				<ui-smart-span :content="description" />
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UiCommonHead',
	props: {
		centered: {
			type: Boolean,
			default: false,
		},
		previous: {
			type: Boolean,
			default: false,
		},
		title: { type: String },
		description: { type: [ String, Array, Object ] },
		light: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: 'md',
			validator: v => ['sm', 'md', 'lg'].includes(v)
		}
	},
};
</script>

<style scoped>
</style>
