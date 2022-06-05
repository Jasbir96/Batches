let initialState = {
    balls: 10
}
// when state is not passed -> initial state -> 10
function ballReducer(state = initialState, action) {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
}
export default ballReducer;