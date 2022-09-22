import documentReducer from "./documentReducer";
import contactReducer from "./contactReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    document: documentReducer,
    contact: contactReducer
})
export default rootReducer;
