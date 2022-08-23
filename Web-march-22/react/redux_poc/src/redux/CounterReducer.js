let initialState = {
    count: 0,
}
// when state is not passed -> initial state -> 0
function CounterReducer(state = initialState, action) {
    switch (action.type) {
        case "increment":
            console.log("5", "counterreducer")
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            console.log("1 inside counterreducer",)
            return state;
    }
}
export default CounterReducer;
