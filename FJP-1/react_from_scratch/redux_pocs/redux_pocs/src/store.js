// npm i redux react-redux
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";
// import ballReducer from "./redux/ballReducer";
// import batReducer from "./redux/batReducer";
// useReducer
const store = createStore(rootReducer);
export default store;