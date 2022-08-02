import React from 'react';
import classes from "./Post.module.css";

const Post = () => {
    return (
        <div className={classes.post}>
            <div className={classes.left}>
                <div className={classes.top}>
                    <img className={classes.userImg} src="https://thispersondoesnotexist.com/image" alt="img: user avatar"/>
                    <span>Имя</span>
                </div>
            </div>
            <button className={classes.button}>Like</button>
        </div>
    );
};

export default Post;