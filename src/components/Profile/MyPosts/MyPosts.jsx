import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

const MyPosts = (props) => {
    let postList = props.posts.map(post =>
        <Post comment={post.comment} likeCount={post.likeCount} />
    )

    return (
        <div className={classes.myPosts}>
            <h2 className={classes.title}>My posts</h2>
            <AddPost />
            { postList }
        </div>
    );
};

export default MyPosts;