<template lang="pug">
	div(:class="classes")
		slot
</template>

<script lang="ts">
    import Vue from "vue";

    const column = (value: number) => 1 <= value && value <= 12;

    export default Vue.extend({
        props: {
            phone: {
                type: Number,
                default: 12,
                validator: column,
            },
            tablet: {
                type: Number,
                default: 12,
                validator: column,
            },
            laptop: {
                type: Number,
                default: 12,
                validator: column,
            },
            desktop: {
                type: Number,
                default: 12,
                validator: column,
            },
        },
        computed: {
            classes() {
                return {
                    "col-span-12": this.phone === 12,
                    "col-span-11": this.phone === 11,
                    "col-span-10": this.phone === 10,
                    "col-span-9": this.phone === 9,
                    "col-span-8": this.phone === 8,
                    "col-span-7": this.phone === 7,
                    "col-span-6": this.phone === 6,
                    "col-span-5": this.phone === 5,
                    "col-span-4": this.phone === 4,
                    "col-span-3": this.phone === 3,
                    "col-span-2": this.phone === 2,
                    "col-span-1": this.phone === 1,
                    "md:col-span-12": this.tablet === 12,
                    "md:col-span-11": this.tablet === 11,
                    "md:col-span-10": this.tablet === 10,
                    "md:col-span-9": this.tablet === 9,
                    "md:col-span-8": this.tablet === 8,
                    "md:col-span-7": this.tablet === 7,
                    "md:col-span-6": this.tablet === 6,
                    "md:col-span-5": this.tablet === 5,
                    "md:col-span-4": this.tablet === 4,
                    "md:col-span-3": this.tablet === 3,
                    "md:col-span-2": this.tablet === 2,
                    "md:col-span-1": this.tablet === 1,
                    "lg:col-span-12": this.laptop === 12,
                    "lg:col-span-11": this.laptop === 11,
                    "lg:col-span-10": this.laptop === 10,
                    "lg:col-span-9": this.laptop === 9,
                    "lg:col-span-8": this.laptop === 8,
                    "lg:col-span-7": this.laptop === 7,
                    "lg:col-span-6": this.laptop === 6,
                    "lg:col-span-5": this.laptop === 5,
                    "lg:col-span-4": this.laptop === 4,
                    "lg:col-span-3": this.laptop === 3,
                    "lg:col-span-2": this.laptop === 2,
                    "lg:col-span-1": this.laptop === 1,
                    "xl:col-span-12": this.desktop === 12,
                    "xl:col-span-11": this.desktop === 11,
                    "xl:col-span-10": this.desktop === 10,
                    "xl:col-span-9": this.desktop === 9,
                    "xl:col-span-8": this.desktop === 8,
                    "xl:col-span-7": this.desktop === 7,
                    "xl:col-span-6": this.desktop === 6,
                    "xl:col-span-5": this.desktop === 5,
                    "xl:col-span-4": this.desktop === 4,
                    "xl:col-span-3": this.desktop === 3,
                    "xl:col-span-2": this.desktop === 2,
                    "xl:col-span-1": this.desktop === 1,
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
