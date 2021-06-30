import React from 'react';
import {Context} from '../../../index';
import {useContext} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "../../Loader/Loader";
import classes from './Message.module.css';

const Message = (props) => {
    const {auth} = useContext(Context);
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loader />
    }

    return (
        <div className={`${classes.message} ${user.uid === props.uid ? classes.myMessage : classes.notMineMessage}`}>
            <div className={classes.message__image}>
                <img className={classes.message__image_item} src={props.photoURL}></img>
            </div>
            <div className={classes.message__data}>
                <div className={classes.message__data_nickname}>
                    { props.displayName }
                </div>
                <div>
                    { props.text }
                </div>
            </div>
        </div>
    )
}

export default Message;