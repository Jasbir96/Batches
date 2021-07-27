import * as actionTasks from "../actionTypes";
import initialState from "../initialState.json";
export default function contactReducer(state = initialState.contactSection, action) {
    switch (action.type) {
        case actionTasks.ADD_CONTACT:
            return action.payload
        case actionTasks.UPDATE_CONTACT:
            // copy orginal object 
            return {
                ...action.payload
            }
        default:
            return state;
    }
}
