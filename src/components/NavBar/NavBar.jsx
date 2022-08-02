import React from 'react';
import classes from "./NavBar.module.css";
import Link from "./Link/Link";

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <Link />
            <Link />
            <Link />
        </nav>
    );
};

export default NavBar;