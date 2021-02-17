const webpack = require("webpack");

module.exports = {
    // load bootstrap and jquery
    css: ["~/node_modules/bootstrap/dist/css/bootstrap.css"],
    plugins: ["~plugins/bootstrap.js"],
    build: {
        /**
         * add external plugins
         */
        vendor: ["jquery", "bootstrap"],
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery"
            })
        ],
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/
                });
            }
        }
    }
};