import initialState from "./initialState.json";
import * as actionTypes from "../actionTypes";
export default function documentReducer(
    state = initialState.document, action) {
    switch (action.type) {
        case actionTypes.SET_SKIN:
            return {
                ... action.payload
            }
        case actionTypes.UPDATE_SKIN:
            return {
                ...state,
               ...action.payload
            }
        default:
            return state;
    }
}