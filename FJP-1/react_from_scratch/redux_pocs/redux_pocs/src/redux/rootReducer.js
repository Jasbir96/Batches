import { combineReducers } from "redux";
import ballReducer from "./reducers/ballReducer";
import batReducer from "./reducers/batReducer";
import userReducer from "./reducers/user/userReducer";
const rootReducer = combineReducers({
    Ball: ballReducer,
    Bat: batReducer,
    User: userReducer
});
export default rootReducer;