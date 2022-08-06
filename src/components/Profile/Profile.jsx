import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import {updateTextPost} from "../../redux/state";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <MyPosts posts={props.state.posts} textPost={props.state.textPost} updateTextPost={updateTextPost} addPost={props.addPost} />
        </div>
    );
};

export default Profile;