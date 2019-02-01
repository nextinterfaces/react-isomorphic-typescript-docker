import Home from '../app/Home';
import Users from '../app/Users';
import { Conditions } from '../app/Conditions';
import { Protocols } from "../app/Protocols";
import { ConditionInfo } from "../app/ConditionInfo";


export default {
    routes: [
        {
            path: '/',
            component: Home,
            exact: true
        },
        {
            path: '/people',
            component: Users,
            exact: true
        },
        {
            path: '/conditions',
            component: Conditions,
            exact: true
        },
        {
            path: '/conditions/:id',
            component: ConditionInfo,
            exact: false
        },
        {
            path: '/protocols',
            component: Protocols,
            exact: true
        }
    ],
    redirects: [
        {
            from: '/people2',
            to: '/people',
            status: 301
        }
    ]
} 