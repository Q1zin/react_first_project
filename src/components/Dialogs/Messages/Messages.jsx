import React from 'react';
import classes from './Messages.module.css'
import Message from "./Message/Message";
import AddMessage from "./AddMessage/AddMessage";
import {addMessage, updateTextMessage} from "../../../redux/state";
import AddMessageContainer from "./AddMessage/AddMessageContainer";

const Messages = (props) => {

    let state = props.store.getState()

    let messageList = state.messagePage.messages.map(message => <Message author={message.author} message={message.message} />)


    return (
        <div className={classes.messages}>
            { messageList }
            <AddMessageContainer store={props.store} />
        </div>
    );
};

export default Messages;