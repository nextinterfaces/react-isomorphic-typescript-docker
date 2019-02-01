'use strict'

const path = require('path')
const fs = require('fs')

const HASH_LENGTH = 5

function WebpackCssPlugin(options) {
}

WebpackCssPlugin.prototype.apply = (compiler) => {

    compiler.plugin('compilation', compilation => {
        clean_dist_dir()
    })

    compiler.plugin('emit', (compilation, callback) => {
        // console.log('Executing post-build scripts')
        callback()
    })

    compiler.plugin('done', (stats) => {
        const hash_js = stats.compilation.fullHash.substring(0, HASH_LENGTH)
        write_hash_to_css(hash_js)
    })
}

const clean_dist_dir = () => {
}

const write_hash_to_css = (hash_js) => {

    hash_js = hash_js.substring(0, 5)

    const shell = require('child_process').execSync;

    let absolutePath = path.resolve('build');
    absolutePath = path.resolve(absolutePath + '/../dist/static/')

    const currentPath = absolutePath + `/next.app.css`;
    const newPath = absolutePath + `/next.app.${hash_js}.css`;
    const hashFile = absolutePath + `/hash.txt`;

    shell(`mv ${currentPath} ${newPath}`);
    shell(`echo "${hash_js}" > ${hashFile}`);
}

module.exports = WebpackCssPlugin