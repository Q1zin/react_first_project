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
        switch (action.type) {
            case "UPDATE-TEXT-POST":
                this._state.profilePage.textPost = action.text
                this._renderFullPage()
                break;
            case "UPDATE-TEXT-MESSAGE":
                this._state.messagePage.textMessage = action.text
                this._renderFullPage()
                break;
            case "ADD-POST":
                if (this._state.profilePage.textPost == "") return
                let newPost = {
                    id: 4,
                    comment: this._state.profilePage.textPost,
                    likeCount: 0
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.textPost = ""
                this._renderFullPage()
                break;
            case "ADD-MESSAGE":
                if (this._state.messagePage.textMessage == "") return
                this._state.messagePage.messages.push(
                    {author: "I", message: this._state.messagePage.textMessage}
                )
                this._state.messagePage.textMessage = ""
                this._renderFullPage()
                break;
        }
    },
}

export default store