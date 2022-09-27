import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { getFirebase } from "react-redux-firebase"
// async work -> thunk use apply ->apply middleware-> function withExtraArgument
// combine : multiple things into create Store -> compose  
import thunk from "redux-thunk";
const store = createStore(rootReducer,
    compose(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
);
// console.log(store);
export default store;
