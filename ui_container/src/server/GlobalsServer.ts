const fs = require('fs');
const path = require('path');

export class GlobalsServer {

    conf: any

    constructor() {

        this.conf = {
            API_SERVER: 'http://nextinterfaces.com',
            PORT: process.env.PORT || 9080,
            SCRIPT_URL: '/static/next.client.app.{__HASH__}.js',
            CSS_URL: '/static/next.app.{__HASH__}.css',
            STATIC_DIR: path.resolve('./ui_container/dist/static/'),
            IS_DEV: false,
        }

        const isDev = process.env.NODE_ENV === 'dev'
        if (isDev) {
            this.conf = {
                API_SERVER: '',
                PORT: this.conf.PORT,
                SCRIPT_URL: 'http://0.0.0.0:8555/__LIVE_RELOAD__/__SCRIPT__',
                CSS_URL: '/static/next.app.{__HASH__}.css',
                STATIC_DIR: path.resolve('dist/static/'),
                IS_DEV: true,
            }
        }

        const hashFile = this.conf.STATIC_DIR + '/hash.txt'
        let hash = fs.readFileSync(hashFile, 'utf8');
        hash = hash.replace(/[\r\n]/g, '');

        this.conf.CSS_URL = this.conf.CSS_URL.replace('{__HASH__}', hash)
        this.conf.SCRIPT_URL = this.conf.SCRIPT_URL.replace('{__HASH__}', hash)
    }

    getConf() {
        return this.conf
    }

    getApiServer() {
        return this.conf.API_SERVER
    }
}
