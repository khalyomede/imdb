<template lang="pug">
	div#app
		header
			base-navbar(brand="IMDb")
				router-link(v-for="menu in menus" :key="menu.id" :to="{ name: menu.route }" slot="menus")
					base-navbar-menu(:active="routeIs(menu.route)") {{ $t(menu.name) }}
		main.main
			keep-alive
				router-view(v-if="$route.meta.cache")
			router-view(v-if="!$route.meta.cache")
		footer
			br
</template>

<script lang="ts">
    import Vue from "vue";
    import { BaseNavbar, BaseNavbarMenu } from "@/components";
    import { mapGetters } from "vuex";

    export default Vue.extend({
        components: {
            BaseNavbar,
            BaseNavbarMenu,
        },
        computed: {
            ...mapGetters(["language"]),
        },
        async created() {
            this.setLanguage();
            await this.redirect();
        },
        data() {
            return {
                show: true,
                menus: [
                    {
                        id: 1,
                        name: "Home",
                        route: "home",
                    },
                    {
                        id: 2,
                        name: "Settings",
                        route: "setting.index",
                    },
                    {
                        id: 3,
                        name: "Credits",
                        route: "credit.index",
                    },
                ],
            };
        },
        methods: {
            routeIs(name: string): boolean {
                return this.$route.name === name;
            },
            setLanguage() {
                this.$i18n.locale = this.language;
            },
            async redirect() {
                let path = localStorage.getItem("path");

                if (path) {
                    localStorage.removeItem("path");

                    path = path.replace("imdb/", "/");

                    await this.$router.push(path);
                }
            },
        },
        watch: {
            language() {
                this.setLanguage();
            },
        },
    });
</script>

<style lang="sass">
    .main
    	margin-top: 58px
</style>
