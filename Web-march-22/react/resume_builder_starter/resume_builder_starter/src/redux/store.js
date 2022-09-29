import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
// get firestore
import { getFirestore, } from "redux-firestore";

import { getFirebase } from "react-redux-firebase"
// async work -> thunk use apply ->apply middleware-> function withExtraArgument
// combine : multiple things into create Store -> compose  
import thunk from "redux-thunk";
const store = createStore(rootReducer,
    compose(applyMiddleware(thunk.withExtraArgument
        ({ getFirebase,getFirestore })))
);
// console.log(store);
export default store;
