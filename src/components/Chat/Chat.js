import React, {useContext, useState} from 'react';
import classes from './Chat.module.css';
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Button, TextField} from "@material-ui/core";
import {useCollectionData} from "react-firebase-hooks/firestore";

const Chat = () => {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderedBy('uid')
    );

    const sendMessage = async () => {
        firestore.collection('messages').add({
            id: user.uid,

        })
        setValue('');
    }

    return (
        <div className={classes.page}>
            <div className={classes.page__messages}>

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