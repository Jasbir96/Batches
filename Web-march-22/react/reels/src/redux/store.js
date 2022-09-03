import { createStore, } from "redux";
import authReducer from "./reducers/authReducer";
import { applyMiddleware } from 'redux';
import { getFirebase } from 'react-redux-firebase';

import { reduxFirestore, getFirestore, } 
from 'redux-firestore';
const reduxStore = createStore(authReducer,
    applyMiddleware(thunk.withExtraArgument(
        // async -> thunk communicate 
        { getFirebase, getFirestore })),
    // binding for redux intercat with firstore 
    reduxFirestore(firebase));
module.exports = reduxStore;


