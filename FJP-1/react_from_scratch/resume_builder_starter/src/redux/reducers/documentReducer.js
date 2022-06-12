import initialState from "./initialState.json";
import * as actionTypes from "../actionTypes";
export default function documentReducer(state = initialState.document, action) {
    switch (action.type) {
        case actionTypes.SET_SKIN:
            return {
                ...state,
                document: action.document
            }
        case actionTypes.UPDATE_SKIN:
            return {
                ...state,
                document: action.document
            }
        default:
            return state;
    }
}