let initialState = {
    loading: true,
    error: "",
    users: []
}
function userReducer(state
    = initialState, action) {
    switch (action.type) {
        case "success_users":
            return {
                users: action.payload,
                loading: false,
                error: ""
            }
        case "error_users":
            return {
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}
export default userReducer;
