let initialState = {
    bat: 10,
    value: ""
}

function batReducer(state = initialState, action) {
    switch (action.type) {
        case "sell_bat":
            if (state.bat - state.value < 0) {
                return {
                    ...state,
                    value: ""
                }
            } else {
                return {
                    bat: state.bat - state.value,
                    value: ""
                }
            }
        case "buy_bat":
            return {
                bat: state.bat +
                    Number(state.value),
                value: ""
            }
        case "set_value":
            return {
                bat: state.bat,
                value: action.payload
            }
        default:
            return state
    }
}
export default batReducer;


