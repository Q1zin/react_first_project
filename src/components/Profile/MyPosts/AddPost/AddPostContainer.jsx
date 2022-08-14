import React from 'react';
import classes from './AddPost.module.css'
import {addPostActionCreator, updateTextPostActionCreator} from "../../../../redux/profile-reducer";
import AddPost from "./AddPost";

const AddPostContainer = (props) => {
    let textPost = props.store.getState().profilePage.textPost

    const addPost = () =>{
        props.store.dispatch(addPostActionCreator())
    }

    const changeText = (text)=>{
        props.store.dispatch(updateTextPostActionCreator(text))
    }

    return (
        <AddPost addPost={addPost} chengeText={changeText} textPost={textPost} />
    );
};

export default AddPostContainer;