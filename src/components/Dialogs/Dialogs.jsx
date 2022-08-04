import React from 'react'
import classes from './Dialogs.module.css'
import DialogList from "./DialogList/DialogList";
import Messages from "./Messages/Messages";

const Dialogs = (props)=>{
    return(
        <div className={classes.dialogsWrap}>
            <DialogList state={props.state.dialogs} />
            <Messages state={props.state.messages} />
        </div>
    )
}

export default Dialogs