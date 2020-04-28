require('./config/webpack.config.js')
module.exports = {
    components: "src/components/**/*.tsx",
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        }
    }
};