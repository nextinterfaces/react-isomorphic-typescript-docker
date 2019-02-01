import express = require('express');
import { Helmet } from "react-helmet";
import * as React from "react"
import App from '../shared/app/App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../shared/redux/reducers/combine';
import { matchPath, StaticRouter as Router } from 'react-router';
import thunk from '../shared/redux/middleware/thunk';
import routeBank from '../shared/routes/routes';
import { GlobalsServer } from "./GlobalsServer";

const ReactDOMServer = require('react-dom/server');

const app = express()

//------
const CONF = new GlobalsServer().getConf()

console.log('server.js starts with CONF: \n', CONF)

app.use('/static', express.static(CONF.STATIC_DIR))

app.get('*', async (req, res) => {

    try {
        //create new redux store on each request
        const store = createStore(rootReducer, {}, applyMiddleware(thunk))
        let foundPath = null

        // match request url to our React Router paths and grab component
        let { path, component } = routeBank.routes.find(
            ({ path, exact }) => {
                foundPath = matchPath(req.url,
                    {
                        path,
                        exact,
                        strict: false
                    }
                )
                return foundPath
            }) || {} as any

        // safety check for valid component, if no component we initialize an empty shell.
        if (!component)
            component = {}

        // safety check for fetchData function, if no function we give it an empty promise
        if (!component.fetchData)
            component.fetchData = () => new Promise(resolve => resolve())

        // console.log('> foundPath:', foundPath, ': req.url', req.url, ', path:', path)

        // meat and bones of our isomorphic application: grabbing async data
        await component.fetchData({ store, params: (foundPath ? foundPath.params : {}) })

        //get store state (js object of entire store)
        let preloadedState = store.getState()

        //context is used by react router, empty by default
        let context = {} as any
        const html = ReactDOMServer.renderToString(
            <Provider store={store}>
                <Router context={context} location={req.url}>
                    <App globals={CONF}/>
                </Router>
            </Provider>
        )

        //render helmet data aka meta data in <head></head>
        const helmetData = Helmet.renderStatic()

        //check context for url, if url exists then react router has ran into a redirect
        if (context.url) {
            console.log('-- aa 2 : ', req.url, foundPath, context.url)
            //process redirect through express by redirecting
            res.redirect(context.status, 'http://' + req.headers.host + context.url)
            // } else if (foundPath && foundPath.path === '/404') {
            //     console.log('-- aa 3 : ', req.url, foundPath, context.url)
            //     //if 404 then send our custom 404 page with initial state and meta data, this is needed for status code 404
            //     res.status(404).send(htmlTemplate(html, preloadedState, helmetData))
        } else if (!!foundPath) {
            res.send(htmlTemplate(html, preloadedState, helmetData))

        } else {
            // 404 state
            res.status(404).send(htmlTemplate(html, preloadedState, helmetData))
        }
    } catch (err) {
        // res.status(400).send(htmlTemplate('An error occured.', {}, {}))
        console.error('(err)', req.url, err)
        res.status(400).send(err + '')
    }
})


app.listen(CONF.PORT, () => {
    console.log('UI-server started, NODE_ENV [' + process.env.NODE_ENV + '], HOME: [' + process.env.HOME + ']')
})

const htmlTemplate = (html, preloadedState, helmet) => {
    let cssLink = `<link rel="stylesheet" href="${CONF.CSS_URL}">`
    cssLink = CONF.IS_DEV ? `<!--${cssLink}-->` : cssLink
    return `
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="/static/img/icon.png" type="image/png">
        <meta name="keywords" content="Important keywords" />
        <meta name="description" content="Important description" />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        
        <script src="/static/js/jquery-3.1.1.slim.min.js"></script>
        <script src="/static/js/tether.min-1.4.0.js"></script>
        <script src="/static/js/bootstrap.min-4.0.0-alpha.6.js"></script>
        <script src="/static/js/react.production.min-umd-16.2.0.js"></script>
        <script src="/static/js/react-dom.production.min-umd-16.2.0.js"></script>
        
        ${cssLink}
        <!-- watch mode doesn't include CSS-->
        <!--<link rel="stylesheet" href="/static/css/bootstrap.min.css">-->
        
      </head>
      
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="${CONF.SCRIPT_URL}"></script>
      </body>
    </html>
    `
}