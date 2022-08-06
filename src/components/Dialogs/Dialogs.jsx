import React from 'react'
import classes from './Dialogs.module.css'
import DialogList from "./DialogList/DialogList";
import Messages from "./Messages/Messages";
import {addMessage, updateTextMessage} from "../../redux/state";

const Dialogs = (props)=>{
    return(
        <div className={classes.dialogsWrap}>
            <DialogList state={props.state.dialogs} />
            <Messages state={props.state.messages}
                      textMessage={props.state.textMessage}
                      updateTextMessage={updateTextMessage}
                      addMessage={addMessage}
            />
        </div>
    )
}

export default Dialogs