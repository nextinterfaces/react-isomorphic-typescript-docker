const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

const DIST_DIR = path.join(__dirname, 'dist');
const WebpackCssPlugin = require('./webpack.css.plugin');

const HASH_LENGTH = 5

module.exports = {
    entry: {
        'next.client': './src/client/index.tsx'
    },
    output: {
        path: DIST_DIR + '/static',
        filename: `[name].app.[hash:${HASH_LENGTH}].js`,
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', 'json', '.ts', '.tsx', '.scss']
    },
    devtool: "source-map",
    module: {
        loaders: [
            {test: /\.tsx?$/, loaders: ['awesome-typescript-loader'], include: path.join(__dirname, 'src')},
            {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.css$/, loaders: ['style-loader', 'css-loader']},
        ]
    },

    plugins: [
        new WebpackCssPlugin({HASH_LENGTH}),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],

    externals: {
        jquery: 'jQuery',
        jQuery: 'jQuery',
        moment: 'moment',

        // Uncomment bellow to remove React from bundle and use external CDN js libs
        // 'react': 'React',
        // 'react-dom': 'ReactDOM'
    },

    watchOptions: {
        poll: 1000
    }
};
