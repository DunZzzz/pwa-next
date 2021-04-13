<!-- emilien <emilien@emilien-pc>, 2021 -->

	<template>
		<span :class="classes">{{ formatted }}</span>
	</template>

<script>
export default {
	name: 'Formatter',
	props: {
		text: { type: String, required: true, },
		classes: { type: String, default: '' },
		filters: { type: Array }
	},
	computed: {
		formatted() {
			let s = this.text;

			if (this.filters) {
				for (const it of this.filters) {
					console.log('OPT', this.$options.filters);
					try {
						s = this.$options.filters[it](s);
					} catch (e) {
						throw new Error(`Filter '${ it }' doesn't exist.`);
					}
				}
			}

			return s;
		}
	},
};
</script>
