
<template>
	<button
		class="font-semibold w-full focus:outline-none"
		:class="classes"
		@click="onClick"
	>
		{{ label }}
	</button>
</template>

<script>
export default {
	name: 'RadioButton',
	props: {
		label: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		selected: {
			type: String,
			required: true
		}
	},
	computed: {
		isSelected() {
			return this.selected === this.name;
		},
		classes() {
			return {
				'bg-gradient-to-r from-brand-purple-400 to-brand-pink-400 text-white text-shadow-sm': this.isSelected,
				'bg-white border border-gray-300': !this.isSelected
			};
		}
	},
	methods: {
		onClick() {
			this.$emit('onClick');
		}
	}
};
</script>

<style scoped>

button {
	height: 2.1rem;
	font-size: 0.8rem;

	&:focus {
		outline: none;
	}
}

button[data-selected=true] {
	font-weight: 500;
}
</style>
