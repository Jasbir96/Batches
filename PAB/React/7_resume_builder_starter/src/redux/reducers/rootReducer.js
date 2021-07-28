import { combineReducers } from "redux";
import documentReducer from "./documentReducer";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";
const rootReducer = combineReducers({
    document: documentReducer,
    contact: contactReducer,
    education: educationReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})
export default rootReducer;