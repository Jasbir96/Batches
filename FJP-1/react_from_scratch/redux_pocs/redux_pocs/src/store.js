// npm i redux 
import { createStore } from "redux";
import ballReducer from "./redux/ballReducer";
const store = createStore(ballReducer);

export default store;