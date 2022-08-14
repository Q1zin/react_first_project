import React from 'react';
import classes from './AddPost.module.css'
import {addPostActionCreator, updateTextPostActionCreator} from "../../../../redux/profile-reducer";

const AddPost = (props) => {
    let elemTextPost = React.createRef()

    const addPost = () =>{
        props.addPost()
    }

    const changeText = ()=>{
        props.chengeText(elemTextPost.current.value)
    }

    return (
        <div className={classes.addPost}>
            <textarea onChange={changeText} value={props.textPost} ref={elemTextPost} placeholder="Write text for your post" className={classes.input}></textarea>
            <button onClick={addPost} className={classes.addPostBtn}>Add post</button>
        </div>
    );
};

export default AddPost;