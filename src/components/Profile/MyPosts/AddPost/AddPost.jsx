import React from 'react';
import classes from './AddPost.module.css'

const AddPost = () => {
    return (
        <div className={classes.addPost}>
            <textarea placeholder="Write text for your post" name="" id="" cols="30" rows="3" className={classes.input}></textarea>
            <button className={classes.addPostBtn}>Add post</button>
        </div>
    );
};

export default AddPost;