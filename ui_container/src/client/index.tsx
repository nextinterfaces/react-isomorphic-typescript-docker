import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../shared/redux/store';
import App from '../shared/app/App';
import * as React from "react"
import * as ReactDOM from "react-dom"

import "../../scss/main.scss"
import { GlobalsClient } from "./GlobalsClient";

ReactDOM.hydrate((
    <Provider store={store}>
        <Router>
            <App globals={new GlobalsClient().getConf()}/>
        </Router>
    </Provider>
), document.getElementById('root'))
