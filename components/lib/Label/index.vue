
<template>
	<label class="label-md" :for="inputId">
		<span>{{ label }}</span>
		<span v-if="required" class="ml-1 text-brand-purple-400">*</span>
	</label>
</template>

<script>
export default {
	name: 'UiLabel',
	props: {
		required: { type: Boolean, default: false },
		label: { type: String, required: true },
		inputId: { type: String, default: 'text' }
	}
};
</script>
