import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

const RedirectWithStatus = ({ key, from, to, status }) => (
    <Route render={({ staticContext }) => {
        // there is no `staticContext` on the client, so
        // we need to guard against that here
        if (staticContext)
            (staticContext as any).status = status
        return <Redirect key={key} from={from} to={to}/>
    }}/>
)
export default RedirectWithStatus