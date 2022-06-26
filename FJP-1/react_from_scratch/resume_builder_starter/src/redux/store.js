import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
// npm i --save-dev redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootReducer, composeWithDevTools());
// console.log(store);
export default store;
