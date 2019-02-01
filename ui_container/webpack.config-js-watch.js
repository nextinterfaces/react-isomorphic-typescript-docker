const path = require('path');

const DIST_DIR = path.join(__dirname, 'dist/static');

// This file generates HRM script url: http://0.0.0.0:8555/__LIVE_RELOAD__/__SCRIPT__

module.exports = {

    entry: {
        'next.client': './src/client/index.tsx'
    },
    output: {
        path: DIST_DIR,
        filename: '__SCRIPT__',
        libraryTarget: 'umd',
        publicPath: '__LIVE_RELOAD__'
    },
    devServer: {
        // public: '0.0.0.0:8555', // hot reload module
        headers: {'Access-Control-Allow-Origin': '*'},
        contentBase: __dirname,
        compress: true,
        disableHostCheck: true,
        stats: 'errors-only'
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
        // new BuildPlugin({DIST_DIR, HTML_INPUT, HTML_OUTPUT, HASH_LENGTH, SCRIPT_URL})
    ],

    externals: {
        jquery: 'jQuery',
        jQuery: 'jQuery',
        moment: 'moment',
        // 'react': 'React',
        // 'react-dom': 'ReactDOM'
    },

    watchOptions: {
        poll: 1000
    }

};
