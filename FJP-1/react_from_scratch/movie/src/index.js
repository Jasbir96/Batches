import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './resetCounter/App';
import MovieApp from "./MovieApp";
const root =
    ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // App is used to render reset counter App
    // <App />
    <MovieApp></MovieApp>
);