import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase, { firebaseConfig } from "./firebase";
import { createFirestoreInstance } from 'redux-firestore';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider
        // firebase lib link
        firebase={firebase}
        // firebase config
        config={firebaseConfig}
        // dispatch to change the store using reducer 
        dispatch={store.dispatch}
        // firestore enable -> you can interact with it 
        createFirestoreInstance={createFirestoreInstance}

      >

        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);