import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.myPosts}>
            <h2 className={classes.title}>My posts</h2>
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default MyPosts;