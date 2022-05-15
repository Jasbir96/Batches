import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
const root =
  ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // it enables routing
  <BrowserRouter>
  <App />
  </BrowserRouter>
);