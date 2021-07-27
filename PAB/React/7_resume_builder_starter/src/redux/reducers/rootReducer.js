import { combineReducers } from "redux";
import documentReducer from "./documentReducer";
import contactReducer from "./contactReducer";
const rootReducer = combineReducers({
    document: documentReducer,
    contact: contactReducer
})

export default rootReducer;