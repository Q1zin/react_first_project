import React from 'react';
import classes from "./AddMessage.module.css"
import {addMessageActionCreator, updateTextMessageActionCreator} from "../../../../redux/message-reducer";

const AddMessage = (props) => {
    let inputMessage = React.createRef()

    const changeTextMessage = ()=>{

        props.dispatch(updateTextMessageActionCreator(inputMessage.current.value))
    }
    const addMessage = ()=>{
        props.dispatch(addMessageActionCreator())
    }

    return (
        <div className={classes.addMessage}>
            <textarea ref={inputMessage} onChange={changeTextMessage} value={props.textMessage} placeholder="Enter your message" className={classes.input} />
            <button onClick={addMessage} className={classes.btn}>Отправить</button>
        </div>
    );
};

export default AddMessage;