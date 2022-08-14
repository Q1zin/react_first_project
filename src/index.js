import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderFullPage = (store) => {
    root.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>
    );
}

renderFullPage(store)

store.subscribe(()=>{
    renderFullPage(store)
})