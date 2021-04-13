
<template>
	<div class="flex flex-col gap-1">
		<ui-label :input-id="uid" :label="label" :required="required" />
		<textarea
			:id="uid"
			v-model="value"
			class="resize-none form__input border focus:outline-none focus:border-brand-purple-400 focus:bg-gray-50 pb-1 pt-1 px-2"
			:rows="rows"
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
	name: 'UiTextArea',
	props: {
		error: { type: Boolean, default: false },
		required: { type: Boolean, default: false },
		label: { type: String, required: true },
		type: { type: String, default: 'text' },
		rows: { type: Number, default: 4 },
		name: String,
		maxlength: { type: Number, default: 2000 },
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
