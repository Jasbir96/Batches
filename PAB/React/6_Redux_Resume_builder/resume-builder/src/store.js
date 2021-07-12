import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";
console.log("Hello")
const store = createStore(rootReducer);
// console.log(store);
export default store;
