import React from 'react';
import {AppBar, Button, Toolbar} from "@material-ui/core";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {CHAT_ROUTER, LOGIN_ROUTER} from "../../utils/consts";

const Navbar = () => {
    let user = true;

    return (
        <div>
            <AppBar color="secondary" position="static">
                <Toolbar className={classes.navbar__items}>
                    {user
                        ?
                        (<NavLink to={LOGIN_ROUTER}>
                            <Button>Логин</Button>
                        </NavLink>)
                        :
                        (<NavLink to={CHAT_ROUTER}>
                            <Button>Выйти</Button>
                        </NavLink>)}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;