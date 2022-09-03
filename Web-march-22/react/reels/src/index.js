import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from "./firebase";
const root = ReactDOM.createRoot(document.getElementById('root'));

// steps import 
import { Provider } from 'react-redux';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import {firebaseConfig} from"./firebase";
root.render(
        <Provider store={reduxStore}>
                <ReactReduxFirebaseProvider
                        firebase={firebase}
                        config={firebaseConfig}
                        // redux storage change 
                        dispatch={reduxStore.dispatch}
                        // firestore
                        createFirestoreInstance={createFirestoreInstance}>
                        <App />
                </ReactReduxFirebaseProvider>
        </Provider>
);


