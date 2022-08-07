import React from 'react';
import classes from "./AddMessage.module.css"

const AddMessage = (props) => {
    let inputMessage = React.createRef()

    const changeTextMessage = ()=>{
        props.dispatch({type:"UPDATE-TEXT-MESSAGE", text: inputMessage.current.value})
    }
    const addMessage = ()=>{
        props.dispatch({type: "ADD-MESSAGE"})
    }

    return (
        <div className={classes.addMessage}>
            <textarea ref={inputMessage} onChange={changeTextMessage} value={props.textMessage} placeholder="Enter your message" className={classes.input} />
            <button onClick={addMessage} className={classes.btn}>Отправить</button>
        </div>
    );
};

export default AddMessage;