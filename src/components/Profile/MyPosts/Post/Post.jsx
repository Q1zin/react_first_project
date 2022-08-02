import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.left}>
                <div className={classes.top}>
                    <img className={classes.userImg} src="https://thispersondoesnotexist.com/image" alt="img: user avatar"/>
                    <span>Имя</span>
                </div>
                <div className={classes.comment}>
                    {props.comment}
                </div>
            </div>
            <div className={classes.right}>
                <button className={classes.button}>Like</button>
                <span className={classes.likeCount}>{props.likeCount}</span>
            </div>

        </div>
    );
};

export default Post;