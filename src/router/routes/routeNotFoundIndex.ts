export default {
    path: "*",
    name: "route-not-found.index",
    component: () =>
        import(
            /* webpackChunkName: "route-not-found-index" */ "../../views/RouteNotFound/Index.vue"
        ),
};
