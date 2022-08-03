import React from 'react';
import classes from "./NavBar.module.css";
import LinkItem from "./LinkItem/LinkItem";

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <LinkItem textLink="Profile" link="/profile" />
            <LinkItem textLink="Messages" link="/messages" />
            <LinkItem textLink="News" link="/news" />
            <LinkItem textLink="Music" link="/music" />
            <LinkItem textLink="Settings" link="/settings" />
        </nav>
    );
};

export default NavBar;