import documentReducer from "./documentReducer";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer";
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    document: documentReducer,
    contact: contactReducer,
    education: educationReducer,
    firebase: firebaseReducer
})
export default rootReducer;
