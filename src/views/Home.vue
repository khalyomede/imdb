<template lang="pug">
	base-container
		base-row
			base-column
				div
					br
		base-row
			base-column
				form(@submit.prevent="showMoviesThatMatchSearch")
					base-input-search(:placeholder="$t('Search')" v-model="search" :loading="loading")
		base-row
			base-column
				br
		div(v-if="loading")
			base-row
				base-column(:tablet="6" :laptop="4" :desktop="3" v-for="id in 4" :key="id")
					base-result-card-loading
		div(v-else)
			base-row(v-if="thereIsResultsToShow")
				base-column(v-for="result in results" :key="result.imdbID" :tablet="6" :laptop="4" :desktop="3")
					router-link(:to="{ name: 'result.show', params: { id: result.imdbID } }")
						base-result-card(:type="result.Type" :image="result.Poster" placeholder="img/placeholder.jpg") {{ result.Title }}
			div.text-center(v-else)
				svg.w-64.h-64.fill-current.mx-auto.text-gray-200
					svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve")
						path(d="M86,75.2c-4.7-3.3-10.8-7.8-15.5-11.1c-1.2-0.8-2.3-2.4-3.5-2.1c-1.1,0.2-1.9,1.9-2.9,3c-0.4,0.5-0.6,0.8,0,1.3  c5.1,4.9,11.4,10.9,16.5,15.8c0.9,0.9,1.9,1,2.8,0.1c1.2-1.3,2.4-2.8,3.6-4.1c0.2-0.3,0.4-0.6,0.3-1C87.3,76.2,86.7,75.7,86,75.2z   M47.1,30.3c-10.2,0-18.6,8.3-18.7,18.3C28.4,59,36.8,67.3,47.2,67.3c10.3,0,18.7-8.2,18.7-18.4C66,38.6,57.6,30.3,47.1,30.3z   M89.7,77.9c-1.2,2-2.8,3.7-4.3,5.4c-1.9,2.3-4.3,2.5-6.5,0.4c-4.3-4.1-8.5-8.2-12.8-12.4c-1.2-1.1-2.3-2.2-3.5-3.4  c-0.4-0.4-1.1-0.7-0.6-1.6c0.3-0.6-1.8-1.2-2.1-0.9c-4.5,3.1-9.5,4.5-15,4c-10.6-0.9-19.3-10.7-18.7-21.3  c0.5-9.7,6.7-17.3,16.1-19.6c11.8-2.9,24,5.2,25.7,17.1c0.6,4.3,0,8.3-1.8,12.2c-0.2,0.4,0.6,2.9,1.6,2c0.3-0.3,0.6,0.2,0.9,0.4  c6.3,4.4,12.5,8.8,18.8,13.2c1.1,0.8,1.7,1.8,2.2,2.9V77.9z")
						g
							path(d="M33.2,44.5c-0.1,0-0.2,0-0.3-0.1c-0.5-0.2-0.8-0.8-0.6-1.3c2.3-6.4,8.5-10.7,15.4-10.7c0.6,0,1,0.4,1,1s-0.4,1-1,1   c-6.1,0-11.5,3.8-13.5,9.4C34,44.2,33.6,44.5,33.2,44.5z")
						g
							path(d="M63,49.5c-0.6,0-1-0.4-1-1c0-3.5-1.3-6.8-3.6-9.4c-0.4-0.4-0.3-1,0.1-1.4c0.4-0.4,1-0.3,1.4,0.1c2.7,3,4.2,6.8,4.2,10.7   C64,49.1,63.5,49.5,63,49.5z")
						g
							path(d="M47,21c-0.6,0-1-0.4-1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C48,20.5,47.6,21,47,21z")
						g
							path(d="M47,87.1c-0.6,0-1-0.4-1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C48,86.7,47.6,87.1,47,87.1z")
						g
							path(d="M68.3,29.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5-4.9c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-5,4.9   C68.8,29.5,68.5,29.6,68.3,29.6z")
						g
							path(d="M20.9,76.4c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5-4.9c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-5,4.9   C21.4,76.3,21.1,76.4,20.9,76.4z")
						g
							path(d="M84.1,50.5h-7c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h7c0.6,0,1,0.4,1,1C85.1,50.1,84.7,50.5,84.1,50.5z")
						g
							path(d="M17,50.5h-7c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h7c0.6,0,1,0.4,1,1C18,50.1,17.6,50.5,17,50.5z")
						g
							path(d="M25.8,29.6c-0.3,0-0.5-0.1-0.7-0.3l-5-4.9c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l5,4.9c0.4,0.4,0.4,1,0,1.4   C26.4,29.5,26.1,29.6,25.8,29.6z")
				div.tracking-wider.text-gray-500 {{ $t("No results. Try others search terms.") }}
</template>

<script lang="ts">
    import Vue from "vue";
    import {
        BaseInputSearch,
        BaseResultCard,
        BaseResultCardLoading,
        BaseContainer,
        BaseRow,
        BaseColumn,
    } from "@/components";

    interface Result {
        Title: string;
        Year: string;
        imdbID: string;
        Type: "series" | "movie" | "game";
        Poster: string;
    }

    interface Response {
        Response: "True" | "False";
        Search: Result[];
        totalResults: string;
    }

    const results: Result[] = [];

    export default Vue.extend({
        components: {
            BaseColumn,
            BaseContainer,
            BaseInputSearch,
            BaseResultCard,
            BaseResultCardLoading,
            BaseRow,
        },
        computed: {
            thereIsResultsToShow() {
                return this.results.length > 0;
            },
        },
        data() {
            return {
                search: "",
                loading: false,
                results,
            };
        },
        methods: {
            async showMoviesThatMatchSearch() {
                if (!this.search) {
                    return;
                }

                await this.setSearchResults();
            },
            async setSearchResults() {
                this.loading = true;

                const response = await fetch(
                    `https://www.omdbapi.com/?s=${this.search}&apikey=c7e9e5e0`
                );
                const results: Response = await response.json();

                console.log("results", results);

                if (results.Response === "True") {
                    this.results = results.Search;
                } else {
                    this.results = [];
                }

                this.loading = false;
            },
        },
    });
</script>

<style lang="sass">
    @import "tailwindcss/base"
    @import "tailwindcss/components"
    @import "tailwindcss/utilities"
</style>
