import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";
import AddPostContainer from "./AddPost/AddPostContainer";

const MyPosts = (props) => {
    let state = props.store.getState()
    let postList = state.profilePage.posts.map(post =>
        <Post comment={post.comment} likeCount={post.likeCount} />
    )

    return (
        <div className={classes.myPosts}>
            <h2 className={classes.title}>My posts</h2>
            <AddPostContainer store={props.store} />
            <div className={classes.postWrap}>
                { postList }
            </div>

        </div>
    );
};

export default MyPosts;