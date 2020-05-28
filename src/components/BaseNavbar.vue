<template lang="pug">
	.flex.items-center.max-w.px-2.bg-white.shadow-md.fixed.right-0.left-0.top-0
		.flex.items-center
			.text-xl.font-bold.tracking-widest.px-2 {{ brand }}
			slot
		.flex.items-center.justify-end.flex-grow
			slot(name="menus")
</template>

<script lang="ts">
    import Vue from "vue";
    export default Vue.extend({
        props: {
            brand: {
                type: String,
                required: true,
            },
        },
    });
</script>

<style lang="sass">
    @import "tailwindcss/base"
    @import "tailwindcss/components"
    @import "tailwindcss/utilities"
</style>
