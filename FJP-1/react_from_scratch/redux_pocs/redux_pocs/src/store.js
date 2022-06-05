// npm i redux react-redux
import { createStore } from "redux";
import ballReducer from "./redux/ballReducer";
// useReducer
const store = createStore(ballReducer);
export default store;