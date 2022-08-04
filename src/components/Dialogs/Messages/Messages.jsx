import React from 'react';
import classes from './Messages.module.css'
import Message from "./Message/Message";

const Messages = (props) => {

    let messageList = props.state.map(message => <Message author={message.author} message={message.message} />)


    return (
        <div className={classes.messages}>
            { messageList }
        </div>
    );
};

export default Messages;