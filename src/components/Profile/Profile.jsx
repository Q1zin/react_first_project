import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <MyPosts store={props.store} />
        </div>
    );
};

export default Profile;