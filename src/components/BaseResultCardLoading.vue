<template lang="pug">
	.shadow-md.rounded-sm.overflow-hidden
		.px-4.pb-2
			.ui.placeholder
				.very.short.line
		.ui.placeholder
			.image.square
		.p-4
			.ui.placeholder
				.paragraph
					.line
</template>

<script lang="ts">
    import Vue from "vue";
    export default Vue.extend({});
</script>

<style lang="sass">
    @import "tailwindcss/base"
    @import "tailwindcss/components"
    @import "tailwindcss/utilities"
    @import "semantic-ui-placeholder/placeholder"
</style>
