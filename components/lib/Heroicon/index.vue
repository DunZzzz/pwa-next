
<template>
	<div class="ui-mask" :class="classes" :style="styles" />
</template>

<script>
export default {
	name: 'UiIcon',
	props: {
		small: {
			type: Boolean,
			default: false
		},
		large: {
			type: Boolean,
			default: false
		},
		name: {
			type: String,
			required: true
		},
		color: {
			type: String,
			default: 'currentColor'
		}
	},
	computed: {
		classes() {
			return {
				'icon-size--md': !this.small && !this.large,
				'icon-size--lg': this.large && !this.small,
				'icon-size--sm': this.small
			};
		},
		styles() {
			return {
				maskImage: (() => {
					const type = this.small ? 'solid' : 'outline';

					try {
						return `url(${ require(`/static/icons/${ type }/${ this.name }.svg`) })`;
					} catch (e) {
						console.error(`Icon '${ this.name }' doesn't exist`);
						return 'none';
					}
				})(),
				backgroundColor: this.color
			};
		}
	}
};
</script>

<style scoped>

.ui-mask {
	height: var(--ui-mask-icon-size);
	width: var(--ui-mask-icon-size);
	/*mask-size: 100% 100%;*/
	mask-size: cover!important;
	display: inline-block;
}

.icon-size--sm { --ui-mask-icon-size: 1.25rem; }
.icon-size--lg { --ui-mask-icon-size: 2rem; }
.icon-size--md { --ui-mask-icon-size: 1.5rem; }

</style>
