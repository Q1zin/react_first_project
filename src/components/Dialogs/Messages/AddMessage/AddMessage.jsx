import React from 'react';
import classes from "./AddMessage.module.css"

const AddMessage = (props) => {
    let inputMessage = React.createRef()

    const changeTextMessage = ()=>{
        props.updateTextMessage(inputMessage.current.value)

    }

    return (
        <div className={classes.addMessage}>
            <textarea ref={inputMessage} onChange={changeTextMessage} value={props.textMessage} placeholder="Enter your message" className={classes.input} />
            <button onClick={props.addMessage} className={classes.btn}>Отправить</button>
        </div>
    );
};

export default AddMessage;