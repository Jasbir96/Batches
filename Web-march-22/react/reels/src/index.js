import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase, { firebaseConfig } from "./firebase";
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import store from "./redux/store";
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
                        dispatch={reduxStore.dispatch}
                >
                        <App />
                </ReactReduxFirebaseProvider>
        </Provider>
);


