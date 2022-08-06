import React from 'react';
import classes from './Messages.module.css'
import Message from "./Message/Message";
import AddMessage from "./AddMessage/AddMessage";
import {addMessage, updateTextMessage} from "../../../redux/state";

const Messages = (props) => {

    let messageList = props.state.map(message => <Message author={message.author} message={message.message} />)


    return (
        <div className={classes.messages}>
            { messageList }
            <AddMessage textMessage={props.textMessage}
                        updateTextMessage={props.updateTextMessage}
                        addMessage={props.addMessage} />
        </div>
    );
};

export default Messages;