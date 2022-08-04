import React from 'react';
import classes from './DialogLink.module.css'
import {NavLink} from "react-router-dom";

const DialogLink = (props) => {
    let path = "/messages/" + props.id


    return (
        <NavLink to={path} className={({ isActive }) => isActive ? classes.dialogLink + ' ' + classes.active : classes.dialogLink + ' ' + undefined}>
            <img className={classes.userImg} src={props.src} alt="img: user"/>
            <span className={classes.userName}>{props.name}</span>
        </NavLink>
    );
};

export default DialogLink;