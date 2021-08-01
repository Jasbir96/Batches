import { createStore, applyMiddleware } from "redux";
import BallReducer from "./reducers/ballReducer";
import BatReducer from "./reducers/batReducer";
import userReducer from "./reducers/userReducer";
import { combineReducers } from "redux";
// 1. add thunk lib
import thunk from "redux-thunk";
// install 
import { composeWithDevTools } from "redux-devtools-extension";
// console.log("Hello")
// multiple reducers 
const rootReducer = combineReducers({
    Ball: BallReducer,
    Bat: BatReducer,
    User: userReducer
});
const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));
// console.log(store);
export default store;