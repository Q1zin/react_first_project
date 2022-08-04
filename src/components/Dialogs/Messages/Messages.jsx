import React from 'react';
import classes from './Messages.module.css'
import Message from "./Message/Message";

const Messages = () => {
    return (
        <div className={classes.messages}>
            <Message author="Вова" message="Привет!" />
            <Message author="Я" message="Привет! Как ты?" />
            <Message author="Вова" message="Да в общем всё хорошо, а ты как?" />
        </div>
    );
};

export default Messages;