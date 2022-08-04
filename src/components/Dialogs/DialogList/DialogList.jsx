import React from 'react';
import DialogLink from "./DialogLink/DialogLink";
import classes from './DialogList.module.css'

const DialogList = () => {
    return (
        <div className={classes.dialog}>
            <DialogLink name="Вова" id="1" src="https://thispersondoesnotexist.com/image" />
            <DialogLink name="Вова 1" id="2" src="https://thispersondoesnotexist.com/image" />
            <DialogLink name="Вова 2" id="3" src="https://thispersondoesnotexist.com/image" />
            <DialogLink name="Вова 3" id="4" src="https://thispersondoesnotexist.com/image" />
        </div>
    );
};

export default DialogList;



