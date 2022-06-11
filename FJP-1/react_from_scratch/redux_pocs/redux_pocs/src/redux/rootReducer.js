import { combineReducers } from "redux";
import ballReducer from "./reducers/ballReducer";
import batReducer from "./reducers/batReducer";
const rootReducer = combineReducers({
    Ball: ballReducer,
    Bat: batReducer,
});
export default rootReducer;