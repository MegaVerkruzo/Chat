import React, {useContext} from 'react';
import {AppBar, Button, Toolbar} from "@material-ui/core";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {CHAT_ROUTER, LOGIN_ROUTER} from "../../utils/consts";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    let user = true;

    return (
        <div>
            <AppBar className={classes.navbar} color="secondary" position="static">
                <Toolbar variant="dense" className={classes.navbar__items}>
                    {user
                        ?
                        (<NavLink to={LOGIN_ROUTER}>
                            <Button>Логин</Button>
                        </NavLink>)
                        :
                        (<NavLink to={CHAT_ROUTER}>
                            <Button onClick={() => auth.signOut()}>Выйти</Button>
                        </NavLink>)}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;