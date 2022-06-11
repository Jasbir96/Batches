// npm i redux react-redux
import { createStore } from "redux";
import ballReducer from "./redux/ballReducer";
import batReducer from "./redux/batReducer";
// useReducer
const store = createStore(batReducer);
export default store;