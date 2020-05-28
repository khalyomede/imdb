export default {
    path: "/setting",
    name: "setting.index",
    component: () =>
        import(
            /* webpackChunkName: "setting-index" */ "../../views/Setting/Index.vue"
        ),
};
