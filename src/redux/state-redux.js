import {combineReducers, createStore} from "redux";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    messagePage: messageReducer,
    profilePage: profileReducer
})

let store = createStore(reducers)

export default store