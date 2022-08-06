import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import state from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderFullPage = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} />
        </BrowserRouter>
    );
}

