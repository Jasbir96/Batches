import documentReducer from "./documentReducer";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    document: documentReducer,
    contact: contactReducer,
    education: educationReducer
})
export default rootReducer;
