<template lang="pug">
	input(type="search" :placeholder="placeholder" :class="inputClasses" v-bind="$attrs" v-on:input="updateValue($event.target.value)")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        placeholder: {
            type: String,
            required: true,
        },
    },
    computed: {
        inputClasses() {
            return {
                "w-full": true,
                "py-2": true,
                "border-b-2": true,
                "border-transparent": true,
                "outline-none": true,
                "focus:border-black": true,
            };
        },
    },
    methods: {
        updateValue(value: string) {
            this.$emit("input", value);
        },
    },
});
</script>

<style lang="sass">
@import "tailwindcss/base"
@import "tailwindcss/components"
@import "tailwindcss/utilities"
</style>
