import { Route, Switch } from 'react-router-dom';
import RedirectWithStatus from './redirect-w-status';
import NavbarComponent from './NavbarComponent';
import routeOptions from '../routes/routes';

import * as React from "react"
import { Globals } from "../Globals";
import { Profile } from "./Profile";
import { UserInfo } from "./UserInfo";
import { ConditionInfo } from "./ConditionInfo";

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Page404 from "./Page404";


export default class App extends React.Component<any> {

    constructor(props) {
        super(props);
        Globals.GLOBAL_CONF = this.props.globals
    }

    render() {

        let routes = routeOptions.routes.map(({ path, component, exact }, i) =>
            <Route key={Math.random() + 'ROUTE_'} exact={exact} path={path} component={component}/>
        )
        let redirects = routeOptions.redirects.map(({ from, to, status }, i) =>
            <RedirectWithStatus key={Math.random() + 'REDIRECT_'} from={from} to={to} status={status}/>
        )
        return <div>
            <NavbarComponent/>
            <Switch>
                {routes}
                {redirects}

                <Route path='/profile/:handle' component={Profile}/>
                <Route path="/people/:userId" component={UserInfo}/>
                <Route path="/conditions/:id" component={ConditionInfo}/>
                <Route component={Page404}/>

            </Switch>
        </div>
    }
}
