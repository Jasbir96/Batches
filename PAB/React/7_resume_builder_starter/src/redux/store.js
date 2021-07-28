import { createStore, applyMiddleware } from "redux";
// firebase authection states manage 
import rootReducer from "./reducers/rootReducer";
// firebase 
import { getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { composeWithDevTools } from 'redux-devtools-extension';
import firebaseConfig from "../secrets";
firebase.initializeApp(firebaseConfig);
firebase.firestore();
let store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware
            (thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase))
);
export default store;