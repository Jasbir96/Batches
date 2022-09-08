import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// normal redux
import store from "./redux/store";
import { Provider } from "react-redux"
// to integrate redux into firebase 
import firebase, { firebaseConfig } from "./firebase";
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

// Routing 
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
// steps import 
// provide through the app -> Provider 
root.render(
        <Provider store={store}>
                <BrowserRouter>
                        <ReactReduxFirebaseProvider
                                // firebase lib link
                                firebase={firebase}
                                // firebase config
                                config={firebaseConfig}
                                // dispatch to change the store using reducer 
                                dispatch={store.dispatch}
                                // to work with firestore
                                createFirestoreInstance={createFirestoreInstance}
                        >
                                <App />
                        </ReactReduxFirebaseProvider>
                </BrowserRouter>

        </Provider>
);


