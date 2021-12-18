const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")

const path = require("path")
const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const jsLoaders = () => {
    const loaders = [
        {
            loader: "babel-loader",
            options: {
                presets: [
                    '@babel/preset-typescript',
                    '@babel/preset-react',
                    "@babel/preset-env"
                ]
            }
        }
    ]

    return loaders
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: "./index.tsx",
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        port: 3000,
        hot: isDev,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    devtool: isDev ? 'source-map' : false,
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
            minify: {
                removeComments: isProd,
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ['file-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: jsLoaders()
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: jsLoaders()
            }
        ]
    }
}