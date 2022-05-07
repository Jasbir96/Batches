import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import UseffectDEMO from './UseffectDEMO';
// import Context from './contextPOCs/theme/Context';
// import ThemeManager from "./contextPOCs/ThemeChanger";
import { BrowserRouter } from "react-router-dom";
// import ContextNormal from './contextPOCs/context_memo/ContextNormal';
import UseState from "./POCS/useState/UseState";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
    //     <App />
    // </BrowserRouter>
    // useState
    <UseState></UseState>

    // <ContextNormal></ContextNormal>    
    // <UseffectDEMO></UseffectDEMO>
    // <Context />
    // <ThemeManager></ThemeManager>
);

