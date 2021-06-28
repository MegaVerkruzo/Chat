import React from 'react';
import classes from './Login.module.css';
import {Button} from "@material-ui/core";

const Login = () => {

    return (
        <div style={{height: window.innerHeight - 50}} className={classes.menu}>
            <div className={classes.menu__block}>
                <Button >Войти с помощью Google</Button>
            </div>
        </div>
    )
}

export default Login;