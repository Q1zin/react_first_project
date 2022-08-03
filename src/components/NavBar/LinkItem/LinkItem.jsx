import React from 'react';
import classes from "./Link.module.css";
import { NavLink } from "react-router-dom";

const LinkItem = (props) => {
    return (
        <NavLink to={props.link} className={({ isActive }) => isActive ? classes.link + ' ' + classes.active : classes.link + ' ' + undefined}>{props.textLink}</NavLink>
    );
};

export default LinkItem;