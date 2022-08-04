import React from 'react';
import DialogLink from "./DialogLink/DialogLink";
import classes from './DialogList.module.css'

const DialogList = () => {
    let dialogs = [
        { id: 1, name: "Vova", src: "https://thispersondoesnotexist.com/image" },
        { id: 2, name: "Vova 2", src: "https://thispersondoesnotexist.com/image" },
        { id: 3, name: "Vova 3", src: "https://thispersondoesnotexist.com/image" },
        { id: 4, name: "Vova 4", src: "https://thispersondoesnotexist.com/image" }
    ]

    let dialogsList = dialogs.map( dialog => <DialogLink name={dialog.name} id={dialog.id} src={dialog.src} /> )

    return (
        <div className={classes.dialog}>
            { dialogsList }
        </div>
    );
};

export default DialogList;



