import React from 'react';
import DialogLink from "./DialogLink/DialogLink";
import classes from './DialogList.module.css'

const DialogList = (props) => {

    let dialogsList = props.state.map( dialog => <DialogLink name={dialog.name} id={dialog.id} src={dialog.src} /> )

    return (
        <div className={classes.dialog}>
            { dialogsList }
        </div>
    );
};

export default DialogList;



