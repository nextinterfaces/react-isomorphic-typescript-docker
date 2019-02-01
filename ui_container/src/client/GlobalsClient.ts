export class GlobalsClient {

    conf: {}

    constructor() {
        this.conf = {
            API_SERVER: ''
        }
    }

    getConf() {
        return this.conf
    }
}
