import React from 'react';
import classes from './Messages.module.css'
import Message from "./Message/Message";

const Messages = () => {
    let messages = [
        {author: "Vova", message: "Hi!"},
        {author: "I", message: "Hi, how are u?"},
        {author: "Vova", message: "I am GOOD! are u?..."}
    ]

    let messageList = messages.map(message => <Message author={message.author} message={message.message} />)


    return (
        <div className={classes.messages}>
            { messageList }
        </div>
    );
};

export default Messages;