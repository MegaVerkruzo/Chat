import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import {publicRouts, privateRouts} from "../routs";
import Login from "./Login";
import {CHAT_ROUTER, LOGIN_ROUTER} from "../utils/consts";

const AppRouter = () => {
    let user = false;
    return user ? (
        <Switch>
            {
                publicRouts.map(({path, component}) =>
                    <Route path={path} component={component} exact={true}/>
                )
            }
            <Redirect to={LOGIN_ROUTER} />
        </Switch>
    ) : (
        <Switch>
            {
                privateRouts.map(({path, component}) =>
                    <Route path={path} component={component} exact={true}/>
                )
            }
            <Redirect to={CHAT_ROUTER} />
        </Switch>
    );
}

export default AppRouter;