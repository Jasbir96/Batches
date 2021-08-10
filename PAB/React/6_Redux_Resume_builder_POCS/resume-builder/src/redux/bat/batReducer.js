import { Buy_Bat } from "../types";
let initialState = {
    quantity: 20,
    dummyState: "Hello"
}
function batReducer(state = initialState, action) {
    console.log(state);
    switch (action.type) {
        case Buy_Bat:
            // store update
            // console.log(action.payload);
            let newObject = {
                ...state,
                quantity:
                    state.quantity - action.payload,
            }
            // console.log(newObject);
            return newObject;
        default:
            return state;
    }
}
export default batReducer;

