import { combineReducers } from "redux";
import documentReducer from "./documentReducer";
const rootReducer = combineReducers({
    document: documentReducer
})
export default rootReducer;
