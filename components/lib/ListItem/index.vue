
<template>
	<div class="flex items-center">
		<div class="w-2 h-2 mr-2 rounded-full" :class="`bg-${ bulletColor }`" />
		<p class="text-xl tracking-wide">{{ text }}</p>
	</div>
</template>

<script>
export default {
	name: 'UiListItem',
	props: {
		text: {
			type: String,
			required: true
		},
		bulletColor: {
			type: String,
			default: 'black',
		}
	},
	computed: {
		classes() {
			return {
				[{
					sm: 'text-xl mt-1',
					md: 'text-2xl mt-1',
					lg: 'text-3xl mt-2'
				}[this.size]]: true,
				'text-white': this.light
			};
		}
	}
};
</script>

<style scoped>

</style>
