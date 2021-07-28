import * as actionTasks from "../actionTypes";
import initialState from "../initialState.json";
export default function educationReducer(state = initialState.educationSection, action) {
    switch (action.type) {
        case actionTasks.ADD_EDUCATION:
            return action.payload
        case actionTasks.UPDATE_EDUCATION:
            // copy orginal object 
            return {
                ...action.payload
            }
        default:
            return state;
    }
}