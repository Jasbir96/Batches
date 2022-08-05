import React from 'react';
import ReactDOM from 'react-dom/client';
// import  ".filePath"
// 1
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// 2
import App from './App';
// reactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


