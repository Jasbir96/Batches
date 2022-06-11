// npm i redux react-redux
import { createStore ,applyMiddleware} from "redux";
// npm i redux-thunbk
import thunk from "redux-thunk";
import rootReducer from "./redux/rootReducer";
// import ballReducer from "./redux/ballReducer";
// import batReducer from "./redux/batReducer";
// useReducer
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;