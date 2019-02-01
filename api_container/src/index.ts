import "reflect-metadata"
import { createConnection } from "typeorm"
import * as Koa from "koa"
import * as Router from "koa-router"
import * as bodyParser from "koa-bodyparser"
import { AppRoutes } from "./routes"
import { LocalConnection, ProdConnection } from "./orm_config";

// create connection with database
// note that its not active database connection
// TypeORM creates you connection pull to uses connections from pull on your requests

const PORT = 9090

const isPROD = (process.env.HOME === '/root')

const conn = isPROD ? ProdConnection : LocalConnection

const cloneConn = Object.assign({}, conn)
delete cloneConn.password

console.log('API-server starting ... DB is: \n-----------\n', cloneConn, '\n-----------\nRunning at dir:', __dirname);

createConnection(conn as any).then(async connection => {

    // create koa app
    const app = new Koa()
    const router = new Router()

    // register all application routes
    AppRoutes.forEach(route => router[route.method](route.path, route.action))

    // run app
    app.use(bodyParser())
    app.use(router.routes())
    app.use(router.allowedMethods())
    app.listen(PORT)

    console.log("API-server started on port " + PORT)

}).catch(error => console.log("TypeORM connection error: ", error))