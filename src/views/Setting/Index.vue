<template lang="pug">
	base-container
		base-row
			base-column
				br
		base-row
			base-column
				div.mb-2
					label.tracking-wider(for="lang") {{ $t("Language") }}
				div
					select.w-full.p-2.bg-white.border.border-black.rounded.outline-none(v-model="selectedLanguage" id="lang" class="focus:border-blue-500" @change="changeLanguage")
						option(v-for="lang in langs" :key="lang.id" :value="lang.code") {{ lang.name }}
</template>

<script lang="ts">
    import Vue from "vue";
    import { mapActions, mapGetters } from "vuex";
    import { BaseContainer, BaseColumn, BaseRow } from "@/components";

    interface Lang {
        id: number;
        code: string;
        name: string;
    }

    const langs: Lang[] = [
        {
            id: 1,
            code: "en",
            name: "English",
        },
        {
            id: 2,
            code: "fr",
            name: "Français",
        },
    ];

    export default Vue.extend({
        components: {
            BaseContainer,
            BaseColumn,
            BaseRow,
        },
        created() {
            this.selectedLanguage = this.language;
        },
        data() {
            return {
                selectedLanguage: "en",
                langs,
            };
        },
        computed: {
            ...mapGetters(["language"]),
        },
        methods: {
            ...mapActions(["setLanguage"]),
            async changeLanguage() {
                await this.setLanguage(this.selectedLanguage);
            },
        },
    });
</script>

<style lang="sass">
    @import "tailwindcss/base"
    @import "tailwindcss/components"
    @import "tailwindcss/utilities"
</style>
