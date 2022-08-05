import {renderFullPage} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, comment: "It's very bad!", likeCount: 176},
            {id: 2, comment: "Okey, -Ycraine", likeCount: 24},
            {id: 3, comment: "It's very good!", likeCount: 112}
        ]
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
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        comment: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    renderFullPage(state)
}

export default state