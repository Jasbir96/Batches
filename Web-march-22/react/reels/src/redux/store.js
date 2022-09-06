import { createStore, applyMiddleware } from 'redux';
import {  getFirebase } from 'react-redux-firebase';
import authReducer from './reducer/authReducer';
const reduxStore = createStore(authReducer,
applyMiddleware
        (thunk.withExtraArgument({ getFirebase })));
        //redux binding for firebase );
export default reduxStore;

  