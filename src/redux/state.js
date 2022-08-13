import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let store = {
    _state: {
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
    },
    _renderFullPage(){},
    subscribe(observer){
        this._renderFullPage = observer
    },
    getState(){
        return this._state
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)

        this._renderFullPage()
    },
}

export default store