<template lang="pug">
	div
		div.relative(style="z-index: -1")
			img.w-full.h-300.object-center.object-cover.lazy(:data-src="result.Poster" :src="'../img/placeholder.jpg'" :alt="$t('Background image')")
			div(style="background: rgb(255,0,0); background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255,255,255,0) 100%); position: absolute; right: 0; left: 0; margin-top: -200px; height: 200px;")
		base-container
			base-row
				base-column
					div.p-4.-mt-32.z-10
						div.p-4.shadow.bg-white.rounded-sm
							div.tracking-widest.uppercase
								div(v-show="loading")
									.ui.placeholder
										.medium.line
								div(v-show="!loading")
									div.flex
										div.mr-2.text-2xl.font-bold {{ result.Title }}
										div.ml-2.text-2xl.flex.justify-end.flex-grow.text-gray-500(v-if="hasMovieRating")
											img.w-16.h-auto.object-contain.object-center.lazy(:data-src="`../img/movie-rating/${result.Rated}.png`" :src="'../img/placeholder.jpg'" :alt="result.Rated")
							div
								br
							div.text-xs.tracking-wider.text-gray-500
								div(v-if="loading")
									.ui.placeholder
										.very.short.line
								div(v-else)
									span {{ $t("Duration") }}: {{ duration }}
									span.float-right {{ $t("Released") }}: {{ result.Year }}
							div
								br
							div(v-if="loading")
								.ui.placeholder
									.paragraph
										.line
										.line
										.line
										.line
										.line
										.line
							div(v-else)
								p {{ result.Plot }}
							div
								br
							div(v-if="loading")
								br
							div(v-else)
								span.text-xs.mx-1.inline-block.mb-6(v-for="rating in result.Ratings") 
									span.bg-gray-400.px-2.py-1.border.border-gray-400.rounded-l-full {{ rating.Source }}
									span.bg-white.px-2.py-1.border.border-gray-400.rounded-r-full {{ rating.Value }}
							div(v-if="loading")
								.ui.placeholder
									.paragraph
										.line
										.line
										.line
							div(v-else)
								div.text-sm
									span.font-bold {{ $t("Genre") }}: 
									span {{ result.Genre }}
								div.text-sm(v-if="isSeries")
									span.font-bold {{ $t("Number of seasons") }}: 
									span {{ result.totalSeasons }}
								div.text-sm
									span.font-bold {{ $t("Featuring") }}: 
									span {{ result.Actors }}
							div
								br
								br
							div(v-if="loading")
								.text-center
									button.bg-gray-300.py-2.px-4.rounded.w-32.h-8
							div(v-else)
								.text-center
									a.tracking-widest.bg-blue-400.py-2.px-4.uppercase.rounded.text-white(:href="`https://www.imdb.com/title/${this.id}/`") {{ $t("See on IMDb") }}
							div
								br
</template>

<script lang="ts">
    import LazyLoad from "vanilla-lazyload";
    import Vue from "vue";
    import { BaseContainer, BaseRow, BaseColumn } from "@/components";

    interface Rating {
        Source: string;
        Value: string;
    }

    interface Result {
        Title: string;
        Year: string;
        Rated: string;
        Released: string;
        Runtime: string;
        Genre: string;
        Director: string;
        Writer: string;
        Actors: string;
        Plot: string;
        Language: string;
        Country: string;
        Awards: string;
        Poster: string;
        Ratings: Rating[];
        Metascore: string;
        imdbRating: string;
        imdbVotes: string;
        imdbID: string;
        Type: "series" | "movie" | "game";
        totalSeasons: string;
        Response: "True" | "False";
    }

    const result: Result = {
        Title: "",
        Year: "",
        Rated: "",
        Released: "",
        Runtime: "",
        Genre: "",
        Director: "",
        Writer: "",
        Actors: "",
        Plot: "",
        Language: "",
        Country: "",
        Awards: "",
        Poster: "",
        Ratings: [],
        Metascore: "",
        imdbRating: "",
        imdbVotes: "0",
        imdbID: "",
        Type: "movie",
        totalSeasons: "0",
        Response: "False",
    };

    export default Vue.extend({
        data() {
            return {
                result: result,
                loading: true,
            };
        },
        components: {
            BaseColumn,
            BaseContainer,
            BaseRow,
        },
        computed: {
            id() {
                return this.$router.currentRoute.params.id;
            },
            isSeries() {
                return this.result.Type === "series";
            },
            hasMovieRating() {
                return !["N/A", "Not Rated", "Approved"].includes(
                    this.result.Rated
                );
            },
            durationInMinutes(): number {
                return Number(this.result.Runtime.replace(/[^\d]+/, ""));
            },
            duration(): string {
                if (this.durationInMinutes < 60) {
                    return this.result.Runtime;
                } else {
                    const hours = Math.trunc(this.durationInMinutes / 60);
                    const minutes = Math.trunc(
                        (this.durationInMinutes / 60 - hours) * 60
                    )
                        .toString()
                        .padStart(2, "0");
                    return `${hours}h${minutes}`;
                }
            },
        },
        async created() {
            this.loading = true;

            const response = await fetch(
                `https://www.omdbapi.com/?i=${this.id}&apikey=c7e9e5e0&plot=full`
            );
            const result: Result = await response.json();

            this.result = result;

            this.loading = false;

            await this.$store.dispatch("updateLazyLoad");
        },
    });
</script>

<style lang="sass">
    @import "tailwindcss/base"
    @import "tailwindcss/components"
    @import "tailwindcss/utilities"
    @import "semantic-ui-placeholder/placeholder"
</style>
