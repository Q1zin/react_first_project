import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.myPosts}>
            <h2 className={classes.title}>My posts</h2>
            <Post comment="Тут такой крутой коммент!" likeCount="20" />
            <Post comment="По приколу вот ещё один" likeCount="15" />
        </div>
    );
};

export default MyPosts;