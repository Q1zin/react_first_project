import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import state, {subscribe} from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderFullPage = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} />
        </BrowserRouter>
    );
}

renderFullPage(state)

subscribe(renderFullPage)