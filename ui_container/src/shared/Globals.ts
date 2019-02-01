export class Globals {

    // This gets injected via <App globals={conf} />
    // This is used as first time usage of API is not defined in server, thus directly passing it
    static GLOBAL_CONF = {
        API_SERVER: 'http://nextinterfaces.com' // TODO
    }

}

