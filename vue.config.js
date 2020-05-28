module.exports = {
    outputDir: "docs",
    publicPath: process.env.NODE_ENV === "production" ? "/imdb/" : "/",

    css: {
        loaderOptions: {
            sass: {
                webpackImporter: false,
                sassOptions: {
                    includePaths: ["node_modules"],
                },
            },
        },
    },

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: false
      }
    }
};
