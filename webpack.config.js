const
    HtmlWebPackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: OUTPUT_DIR,
        publicPath: "/dist",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            { test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            constants: path.resolve(__dirname, 'src/constants/'),
            // modules: path.resolve(__dirname, 'src/modules/'),
            // components: path.resolve(__dirname, 'src/components/'),
            // constants: path.resolve(__dirname, 'src/constants/'),
            // actions: path.resolve(__dirname, 'src/actions/'),
            //
            // //configured npm packages:
            // node_modules: path.resolve(__dirname, 'node_modules'),
            // lockr: path.resolve(__dirname, 'src/config/lockr'),
            // immer: path.resolve(__dirname, 'src/config/immer'),
        }
    },
    devServer: {
        contentBase: OUTPUT_DIR,
        historyApiFallback: true,
        hot: true,
        //is required to test in Browser stack, you should also have (127.0.0.1 bs-local.com) record in etc/hosts file
        disableHostCheck: true
    },
    devtool: 'source-map'
};