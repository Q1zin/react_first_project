import React from 'react';
import classes from "./AddMessage.module.css"
import {addMessageActionCreator, updateTextMessageActionCreator} from "../../../../redux/message-reducer";
import AddMessage from "./AddMessage";

const AddMessageContainer = (props) => {
    const changeTextMessage = (text)=>{
        props.store.dispatch(updateTextMessageActionCreator(text))
    }
    const addMessage = ()=>{
        props.store.dispatch(addMessageActionCreator())
    }

    return (
        <AddMessage addMessage={addMessage} changeTextMessage={changeTextMessage} textMessage={props.store.getState().messagePage.textMessage}  />
    );
};

export default AddMessageContainer;