<template lang="pug">
	div(:class="classes")
		slot
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    props: {
        active: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return {
                "tracking-wide": true,
                "uppercase": true,
                "px-2": true,
                "py-4": true,
                "cursor-pointer": true,
                "border-b-2": true,
                "border-transparent": !this.active,
                "border-black": this.active,
            };
        },
    },
});
</script>

<style lang="sass">
@import "tailwindcss/base"
@import "tailwindcss/components"
@import "tailwindcss/utilities"
</style>
