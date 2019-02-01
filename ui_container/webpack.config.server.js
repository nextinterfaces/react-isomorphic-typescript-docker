const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DIST_DIR = path.join(__dirname, 'dist');

module.exports = {
    stats: 'minimal',
    entry: {
        'next.server': './src/server/server.tsx'
    },
    output: {
        path: DIST_DIR,
        filename: 'server.js'
    },
    resolve: {
        extensions: ['.js', 'json', '.ts', '.tsx', '.scss']
    },
    target: 'node',
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.tsx?$/, loaders: ['awesome-typescript-loader'], include: path.join(__dirname, 'src')},
        ]
    },

    plugins: [
        new CopyWebpackPlugin([{from: 'html', to: 'static'}]),
    ],

    externals: nodeExternals(),
    // externals: {
    // jquery: 'jQuery',
    // jQuery: 'jQuery',
    // moment: 'moment',
    // 'react': 'React',
    // 'react-dom': 'ReactDOM'
    // },

    watchOptions: {
        poll: 1000
    }
};
