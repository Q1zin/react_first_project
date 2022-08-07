import React from 'react';
import classes from './AddPost.module.css'

const AddPost = (props) => {
    let elemTextPost = React.createRef()

    const addPost = () =>{
        props.dispatch({type: "ADD-POST"})
    }

    const changeText = ()=>{
        props.dispatch({type: "UPDATE-TEXT-POST", text: elemTextPost.current.value})
    }

    return (
        <div className={classes.addPost}>
            <textarea onChange={changeText} value={props.textPost} ref={elemTextPost} placeholder="Write text for your post" name="" id="" cols="30" rows="3" className={classes.input}></textarea>
            <button onClick={addPost} className={classes.addPostBtn}>Add post</button>
        </div>
    );
};

export default AddPost;