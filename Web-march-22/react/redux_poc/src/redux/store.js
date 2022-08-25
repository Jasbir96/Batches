// inbuilt function creatStore -> input : reducer
import { createStore, combineReducers, applyMiddleware } from "redux";
import CounterReducer from "./CounterReducer";
import BatReducer from "./BatReducer";
import userReducer from "./user/userReducer";
import thunk from "redux-thunk";

// to use multiple reducers
const rootReducer = combineReducers({
    Count: CounterReducer,
    Bat: BatReducer,
    User: userReducer
});
// single store when using middlewares  
const store = createStore(rootReducer,
     applyMiddleware(thunk));
export default store;