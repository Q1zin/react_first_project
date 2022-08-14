import React from 'react'
import classes from './Dialogs.module.css'
import DialogList from "./DialogList/DialogList";
import Messages from "./Messages/Messages";
import {addMessage, updateTextMessage} from "../../redux/state";

const Dialogs = (props)=>{
    let state = props.store.getState()

    return(
        <div className={classes.dialogsWrap}>
            <DialogList state={state.messagePage.dialogs} />
            <Messages store={props.store} />
        </div>
    )
}

export default Dialogs