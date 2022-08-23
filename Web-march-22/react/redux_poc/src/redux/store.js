// inbuilt function creatStore -> input : reducer
import { createStore, combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import BatReducer from "./BatReducer";
// to use multiple reducers
const rootReducer = combineReducers({
    Count: CounterReducer,
    Bat: BatReducer,
});
// single store 
const store = createStore(rootReducer);
export default store;