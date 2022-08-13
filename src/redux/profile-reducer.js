const UPDATE_TEXT_POST = "UPDATE-TEXT-POST"
const ADD_POST = "ADD-POST"

export const updateTextPostActionCreator = (text)=>({type: UPDATE_TEXT_POST, text: text})
export const addPostActionCreator = ()=>({type: ADD_POST})

const profileReducer = (state, action) =>{
    switch (action.type) {
        case UPDATE_TEXT_POST:
            state.textPost = action.text
            return state
        case ADD_POST:
            if (state.textPost === "") return
            let newPost = {
                id: 4,
                comment: state.textPost,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.textPost = ""
            return state
        default:
            return state
    }
}

export default profileReducer

