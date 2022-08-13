const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE"
const ADD_MESSAGE = "ADD-MESSAGE"

export const updateTextMessageActionCreator = (text)=>({type: UPDATE_TEXT_MESSAGE, text: text})
export const addMessageActionCreator = ()=>({type: ADD_MESSAGE})

const messageReducer = (state, action) =>{
    switch (action.type) {
        case UPDATE_TEXT_MESSAGE:
            state.textMessage = action.text
            break;
        case ADD_MESSAGE:
            if (state.textMessage == "") return
            state.messages.push(
                {author: "I", message: state.textMessage}
            )
            state.textMessage = ""
            break;
    }
    return state
}

export default messageReducer

