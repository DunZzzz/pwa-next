
<template>
	<div class="flex flex-col gap-1">
		<ui-label :input-id="uid" :label="label" :required="required" />
		<input
			:id="uid"
			v-model="value"
			class="rounded-t-md form__input border-0 border-b focus:outline-none focus:border-brand-purple-400 focus:bg-gray-50 pb-1 pt-1 pl-2"
			:type="type"
			:name="name"
			:class="classes"
			:placeholder="placeholder"
			:maxlength="maxlength"
		/>
		<slot v-if="error" />
	</div>
</template>

<script>
export default {
	name: 'UiInput',
	props: {
		error: { type: Boolean, default: false },
		required: { type: Boolean, default: false },
		label: { type: String, required: true },
		type: { type: String, default: 'text' },
		maxlength: { type: Number, default: 50 },
		name: String,
		placeholder: String
	},
	data() {
		return {
			uid: `input-${ Math.random().toString(36).substr(2) }`,
			value: ''
		};
	},
	computed: {
		classes() {
			return {
				'border-gray-300': !this.error,
				'border-red-300': this.error
			};
		}
	},
	watch: {
		value(newVal) {
			this.$emit('input', newVal);
		}
	}
};
</script>
