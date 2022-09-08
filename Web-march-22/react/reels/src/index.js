import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase, { firebaseConfig } from "./firebase";
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import {  createFirestoreInstance }
        from 'redux-firestore';
import store from "./redux/store";
import { Provider } from "react-redux"
const root = ReactDOM.createRoot(document.getElementById('root'));
// steps import 
// provide through the app -> Provider 
root.render(
        <Provider store={store}>
                <ReactReduxFirebaseProvider
                        // firebase lib link
                        firebase={firebase}
                        // firebase config
                        config={firebaseConfig}
                        // dispatch to change the store using reducer 
                        dispatch={store.dispatch}
                        createFirestoreInstance={createFirestoreInstance}

                >
                        <App />
                </ReactReduxFirebaseProvider>
        </Provider>
);


