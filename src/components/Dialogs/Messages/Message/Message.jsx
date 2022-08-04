import React from 'react';
import classes from './Message.module.css'

const Message = (props) => {
    return (
        <div className={classes.messageWrap}>
            <div className={classes.messageLeft}>
                <img className={classes.userImg} src="https://thispersondoesnotexist.com/image" alt="img: user"/>
            </div>
            <div className={classes.messageRight}>
                <span className={classes.messageAuthor}>{props.author}</span>
                <span className={classes.messageText}>{props.message}</span>
            </div>

        </div>
    );
};

export default Message;