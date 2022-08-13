import React from 'react';
import classes from './AddPost.module.css'
import {addPostActionCreator, updateTextPostActionCreator} from "../../../../redux/profile-reducer";

const AddPost = (props) => {
    let elemTextPost = React.createRef()

    const addPost = () =>{
        props.dispatch(addPostActionCreator())
    }

    const changeText = ()=>{
        props.dispatch(updateTextPostActionCreator(elemTextPost.current.value))
    }

    return (
        <div className={classes.addPost}>
            <textarea onChange={changeText} value={props.textPost} ref={elemTextPost} placeholder="Write text for your post" name="" id="" cols="30" rows="3" className={classes.input}></textarea>
            <button onClick={addPost} className={classes.addPostBtn}>Add post</button>
        </div>
    );
};

export default AddPost;