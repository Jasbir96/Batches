import { createStore } from "redux";
// 1
let initialState = {
    balls: 5
}
// 2
function BallReducer(state = initialState,
    action) {
    // update 
    // nothing
    // n  types of changes 
    // state change logic
    switch (action.type) {
        case "buy_ball":
            // store update 
            let newState = {
                balls: state.balls - 1
            }
            return newState;
        case "sell_ball":
            let newState = {
                balls: state.balls + 1
            }
            return newState;
        default:
            return initialState;
    }
    // console.log("in store",action);
}
// 3
const store = createStore(BallReducer);
export default store;
