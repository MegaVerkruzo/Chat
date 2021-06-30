import React, {useContext} from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import {publicRouts, privateRouts} from "../routs";
import Login from "./Login/Login";
import {CHAT_ROUTER, LOGIN_ROUTER} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";


const AppRouter = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    return !user ? (
        <Switch>
            {
                publicRouts.map(({path, component}) =>
                    <Route key={path} path={path} component={component} exact={true}/>
                )
            }
            <Redirect to={LOGIN_ROUTER} />
        </Switch>
    ) : (
        <Switch>
            {
                privateRouts.map(({path, component}) =>
                    <Route key={path} path={path} component={component} exact={true}/>
                )
            }
            <Redirect to={CHAT_ROUTER} />
        </Switch>
    );
}

export default AppRouter;