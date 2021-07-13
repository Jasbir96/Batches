import { combineReducers } from "redux";
import BatReducer from "./bat/batReducer";
import BallReducer from "./ball/ballReducer";
import userReducer from "./user/userReducer";
// console.log("root Reducer");
// merged store
const rootReducer = combineReducers({
    Ball: BallReducer,
    Bat: BatReducer,
    User: userReducer
});
export default rootReducer;