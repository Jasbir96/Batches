import { createStore } from "redux";
import ShoppingReducer from "../cartRedux/ShoppingReducer";
console.log("Hello")
const store = createStore(ShoppingReducer);
// console.log(store);
export default store;