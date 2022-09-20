import initialState from "./initialState.json";
import * as actionTypes from "../actionTypes";
import documentReducer from "./documentReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    document: documentReducer
})
export default rootReducer;
