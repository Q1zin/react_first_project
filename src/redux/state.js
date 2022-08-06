import {renderFullPage} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, comment: "It's very bad!", likeCount: 176},
            {id: 2, comment: "Okey, -Ycraine", likeCount: 24},
            {id: 3, comment: "It's very good!", likeCount: 112}
        ],
        textPost: ""
    },
    messagePage: {
        dialogs: [
            { id: 1, name: "Vova", src: "https://thispersondoesnotexist.com/image" },
            { id: 2, name: "Vova 2", src: "https://thispersondoesnotexist.com/image" },
            { id: 3, name: "Vova 3", src: "https://thispersondoesnotexist.com/image" },
            { id: 4, name: "Vova 4", src: "https://thispersondoesnotexist.com/image" }
        ],
        messages: [
            {author: "Vova", message: "Hi!"},
            {author: "I", message: "Hi, how are u?"},
            {author: "Vova", message: "I am GOOD! are u?..."}
        ],
        textMessage: ""
    }
}

export let updateTextPost = (text)=>{
    state.profilePage.textPost = text
    renderFullPage(state)
}

export let addPost = () => {
    if (state.profilePage.textPost == "") return
    let newPost = {
        id: 4,
        comment: state.profilePage.textPost,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.textPost = ""
    renderFullPage(state)
}

export let updateTextMessage = (text)=>{
    state.messagePage.textMessage = text
    renderFullPage(state)
}

export let addMessage = ()=>{
    if (state.messagePage.textMessage == "") return
    state.messagePage.messages.push(
        {author: "I", message: state.messagePage.textMessage}
    )
    state.messagePage.textMessage = ""
    renderFullPage(state)
}


export default state