import React, {useContext} from 'react';
import classes from './Login.module.css';
import {Button} from "@material-ui/core";
import {Context} from "../../index";
import firebase from 'firebase';

const Login = () => {
    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
    }


    return (
        <div style={{height: window.innerHeight - 50}} className={classes.menu}>
            <div className={classes.menu__block}>
                <Button onClick={login} >Войти с помощью Google</Button>
            </div>
        </div>
    )
}

export default Login;