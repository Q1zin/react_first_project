import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import state from './redux/state'
import {renderFullPage} from "./render";

renderFullPage(state)