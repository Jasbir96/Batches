import * as actionTypes from "../actionTypes";
import initialState from "../initialState.json";
export default function authReducer(state = initialState.auth, action) {
    switch (action.type) {
        case actionTypes.SIGN_IN_FAILED:
            return {

                ErrorMessage: action.payload,
                loading: false

            }
        case actionTypes.SIGN_IN_REQUEST:
            return {
                ErrorMessage: "",
                loading: true
            }
        case actionTypes.SIGN_IN_SUCCESS:
            return {
                loading: false,
                ErrorMessage: ""

            }
        case actionTypes.REMOVE_ERROR:
            return {
                loading: false,
                ErrorMessage: ""
            }
        default:
            return state;
    }
}
