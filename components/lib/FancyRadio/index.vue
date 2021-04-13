<template>
	<div>
		<ui-label :label="label" :required="required" />
		<div id="reason-fields" class="flex flex-row gap-4 mt-1">
			<RadioButton
				v-for="field in fields"
				v-bind="field"
				:key="field.name"
				:selected="selected"
				@onClick="updateRadio(field.name)"
			/>
		</div>
	</div>
</template>

<script>
import RadioButton from './RadioButton';

export default {
	name: 'UiFancyRadio',
	components: { RadioButton },
	props: {
		label: {
			type: String,
			required: true
		},
		fields: {
			type: Array,
			required: true,
			validator: v => v.length >= 2
		},
		required: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			selected: this.fields[0].name
		};
	},
	methods: {
		updateRadio(val) {
			this.selected = val;
			this.$emit('input', val);
		}
	}
};

</script>

<style scoped>
.ui-reason-root {
	grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));

}
</style>
