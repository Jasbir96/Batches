import initialState from "./initialState.json";
import * as actionTypes from "../actionTypes";
export default function documentReducer(
    state = initialState.educationSection, action) {
    // 4. 
    switch (action.type) {
        case actionTypes.SET_EDUCATION:
            console.log("7", state);
            return {
                ...action.payload
            }
        default:
            return state;
    }
}