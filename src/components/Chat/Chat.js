import React, {useContext, useState} from 'react';
import classes from './Chat.module.css';
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Button, TextField} from "@material-ui/core";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from 'firebase';
import Loader from "../Loader/Loader"
import Message from "./Message/Message";

const Chat = () => {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );

    if (loading) {
        return <Loader />
    }

    const translated_messages = messages.map(el => <Message uid={el.uid} text={el.text} photoURL={el.photoURL} displayName={el.displayName}/>);

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setValue('');
    }

    return (
        <div className={classes.page}>
            <div className={classes.page__messages}>
                { translated_messages }
            </div>
            <div className={classes.page__input}>
                <TextField
                    fullWidth
                    rowsMax={2}
                    variant={"outlined"}
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </div>
            <div className={classes.page__button}>
                <Button onClick={sendMessage} variant="contained">Отправить</Button>
            </div>
        </div>
    )
}

export default Chat;