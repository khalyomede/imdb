import Vue from "vue";
import Vuex from "vuex";
import LazyLoad from "vanilla-lazyload";

Vue.use(Vuex);

let language = localStorage.getItem("language");

try {
    language = JSON.parse(language ?? JSON.stringify("en"));
} catch (exception) {
    language = "en";
}

export default new Vuex.Store({
    state: {
        lazyLoad: new LazyLoad({
            threshold: 0,
            elements_selector: ".lazy",
        }),
        language,
    },
    getters: {
        language: (state) => state.language,
    },
    mutations: {
        updateLazyLoad: (state) => state.lazyLoad.update(),
        setLanguage(state, lang: string) {
            state.language = lang;
            localStorage.setItem("language", JSON.stringify(lang));
        },
    },
    actions: {
        updateLazyLoad: ({ commit }) => commit("updateLazyLoad"),
        setLanguage: ({ commit }, lang: string) => commit("setLanguage", lang),
    },
    modules: {},
});
