const initialState = {
    authError: null,
}
function authReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                authError: null,
            }
        case "LOGIN_FAILURE":
            return {
                authError: action.payload,
            }

        case "SIGNOUT":
            return {
                authError: null,
            }
        case "SIGNOUT_FAILURE":
            return {
                authError: action.payload
            }
        case "SIGNUP_SUCCESS":
            return {
                authError: null
            }
        case "SIGNUP_FAILURE":
            return {
                authError: action.payload
            }
        default:
            return state;
    }
}
export default authReducer;