import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={classes.profile}>
            <MyPosts />
        </div>
    );
};

export default Profile;