export default {
    path: "/credit",
    name: "credit.index",
    component: () =>
        import(
            /* webpackChunkName: "credit-index" */ "../../views/Credit/Index.vue"
        ),
};
