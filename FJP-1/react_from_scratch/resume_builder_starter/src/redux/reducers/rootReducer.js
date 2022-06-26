import initialState from "./initialState.json";
import * as actionTypes from "../actionTypes";
import documentReducer from "./documentReducer";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    documentReducer: documentReducer,
    contactReducer: contactReducer,
    educationReducer:educationReducer
})
export default rootReducer;
