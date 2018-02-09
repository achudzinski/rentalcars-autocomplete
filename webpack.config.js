const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: "output/app.js"
    },
    devServer: {
        port: 8081
    },
    externals: {
        'config': JSON.stringify(process.env.ENV == 'production' ? require('./config/config.prod.json') : require('./config/config.dev.json'))
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                query: {
                    presets:['react']
                }
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                exclude: [/node_modules/],
                //enforce: 'pre',
                options: {
                    configFile: './.eslintrc',
                    emitWarning: true,
                },
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('output/style.css')
    ]
};
