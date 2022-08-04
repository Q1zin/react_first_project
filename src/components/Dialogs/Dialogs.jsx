import React from 'react'
import classes from './Dialogs.module.css'
import DialogList from "./DialogList/DialogList";
import Messages from "./Messages/Messages";

const Dialogs = ()=>{
    return(
        <div className={classes.dialogsWrap}>
            <DialogList />
            <Messages />
        </div>
    )
}

export default Dialogs