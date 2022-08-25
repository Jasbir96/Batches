let initialState = {
    userState: "",
    loading: true
}
// when state is not passed -> initial state -> 0
function userReducer(state = initialState, action) {
    switch (action.type) {
        case "setUser":
            return {
                userState: JSON.stringify(action.payload),
                loading: false
            };
        default:
            return state;
    }
}
export default userReducer;


