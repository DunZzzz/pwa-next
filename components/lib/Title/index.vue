
<template>
	<nuxt-link to="/" class="flex flex-row items-center">
		<ui-logo :light="light" :size="size" />
		<h4 class="font-black tracking-wide ml-2 leading-none" :class="classes">
			pwa-email
		</h4>
	</nuxt-link>
</template>

<script>
export default {
	name: 'UiTitle',
	props: {
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
