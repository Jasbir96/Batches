import { products } from "../data/data";
let initialState = {
    products,
}
function BallReducer(state = initialState,
    action) {
    // update 
    // nothing
    // n  types of changes 
    // state change logic
    // console.log(state);
    switch (action.type) {
        default:
            return state;
    }
    // console.log("in store",action);
}
export default BallReducer