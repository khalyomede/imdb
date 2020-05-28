<template lang="pug">
	base-container
		base-row
			base-column
				br
		base-row
			base-column
				p 
					| {{ $t("Empty search icon by") }} 
					a.underline.text-blue-500(href="https://thenounproject.com/mithun5/") Humble_Bee
					|  {{ $t("from the") }} 
					a.underline.text-blue-500(href="https://thenounproject.com/") Noun Project.
</template>

<script lang="ts">
    import Vue from "vue";
    import { BaseContainer, BaseColumn, BaseRow } from "@/components";

    export default Vue.extend({
        components: {
            BaseContainer,
            BaseColumn,
            BaseRow,
        },
    });
</script>

<style lang="sass">
    @import "tailwindcss/base"
    @import "tailwindcss/components"
    @import "tailwindcss/utilities"
</style>
