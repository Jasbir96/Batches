let initialState = {
    bats: 5
}
function BatReducer(state
    = initialState, action) {
    switch (action.type) {
        case "set_bat":
            return {
                bats: state.bats - action.payload
            }
        default:
            return state;
    }
}
export default BatReducer;
