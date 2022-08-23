// inbuilt function creatStore -> input : reducer
import { createStore, } from "redux";
import CounterReducer from "./CounterReducer";
const store = createStore(CounterReducer);
export default store;