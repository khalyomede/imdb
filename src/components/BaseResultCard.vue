<template lang="pug">
	.shadow-md.rounded-sm.overflow-hidden
		div(:class="cardTypeClasses") {{ $t(type) }}
		img.w-full.h-auto(:src="image" alt="Preview image")
		.p-4.tracking-wider.font-bold
			slot
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        props: {
            image: {
                type: String,
                required: true,
            },
            placeholder: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                required: true,
                validator: (value) =>
                    ["movie", "series", "game"].includes(value),
            },
        },
        computed: {
            isSeries() {
                return this.type === "series";
            },
            isMovie() {
                return this.type === "movie";
            },
            isGame() {
                return this.type === "game";
            },
            cardTypeClasses() {
                return {
                    "px-4": true,
                    "py-2": true,
                    "uppercase": true,
                    "tracking-wider": true,
                    "text-white": true,
                    "bg-blue-500": this.isSeries,
                    "bg-red-500": this.isMovie,
                    "bg-yellow-500": this.isGame,
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
