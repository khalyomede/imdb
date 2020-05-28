export default {
    path: "/result/:id",
    name: "result.show",
    component: () =>
        import(
            /* webpackChunkName: "result-show" */ "../../views/Result/Show.vue"
        ),
};
