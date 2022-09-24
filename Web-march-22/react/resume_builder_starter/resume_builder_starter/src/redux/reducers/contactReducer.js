import initialState from "./initialState.json";
import * as actionTypes from "../actionTypes";
export default function documentReducer(
    state = initialState.contactSection, action) {
        // 4. 
    switch (action.type) {
        case actionTypes.SET_CONTACT:
            // console.log("7",state);
            return {
             ...action.payload
            }
        default:
            return state;
    }
}