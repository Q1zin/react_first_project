import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <MyPosts posts={props.state.posts}
                     textPost={props.state.textPost}
                     dispatch={props.dispatch} />
        </div>
    );
};

export default Profile;