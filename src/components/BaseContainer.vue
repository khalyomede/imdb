<template lang="pug">
	div(:class="classes")
		slot
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    computed: {
        classes() {
            return {
                "xl:px-64": true,
                "lg:px-32": true,
                "md:px-8": true,
                "px-4": true,
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
