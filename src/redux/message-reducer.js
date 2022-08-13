const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE"
const ADD_MESSAGE = "ADD-MESSAGE"

export const updateTextMessageActionCreator = (text)=>({type: UPDATE_TEXT_MESSAGE, text: text})
export const addMessageActionCreator = ()=>({type: ADD_MESSAGE})

let initialState = {
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

const messageReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UPDATE_TEXT_MESSAGE:
            state.textMessage = action.text
            return state
        case ADD_MESSAGE:
            if (state.textMessage === "") return
            state.messages.push(
                {author: "I", message: state.textMessage}
            )
            state.textMessage = ""
            return state
        default:
            return state
    }
}

export default messageReducer

