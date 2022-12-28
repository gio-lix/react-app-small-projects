import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import PlayContextProvider from "./context/PlayContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <PlayContextProvider>
            <App />
        </PlayContextProvider>
    </BrowserRouter>

);

