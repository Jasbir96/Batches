let initialState = {
    users: [],
    error: "",
    loading: true
}
function userReducer(state = initialState, action) {
    console.log(state);
    switch (action.type) {
        case "error_users":
            return {
                users: [],
                loading: false,
                error: action.payload
            }
        case "success_users":
            return {
                users: action.payload,
                error: "",
                loading: false
            }
        default:
            return state;
    }
}
// export const h="hi";
export default userReducer;