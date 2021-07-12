let initialState = {
    balls: 5
}
function BallReducer(state = initialState,
    action) {
    // update 
    // nothing
    // n  types of changes 
    // state change logic
    console.log(state);
    switch (action.type) {
        case "buy_ball":
            // store update 
            return {
               
                balls: state.balls - 1,
            };
        case "sell_ball":
            return {
                balls: state.balls + 1,
               
            };
        default:
            return state;
    }
    // console.log("in store",action);
}
export default BallReducer