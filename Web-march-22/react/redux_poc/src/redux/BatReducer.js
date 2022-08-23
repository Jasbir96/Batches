let initialState = {
    batCount: 10,
}
// when state is not passed -> initial state -> 0
function BatReducer(state = initialState, action) {
    switch (action.type) {
        case "sellbat":
            return {
                batCount:
                    state.batCount - action.payload
            };
        default:
            return state;
    }
}
export default BatReducer;
