import initialState from "./initialState.json";
import * as actionTypes from "../actionTypes";
import documentReducer from "./documentReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    documentReducer: documentReducer
})
export default rootReducer;
