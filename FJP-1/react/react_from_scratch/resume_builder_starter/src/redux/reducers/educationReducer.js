import initialState from './initialState.json';
import * as actionTypes from '../actionTypes';
export default function contactReducer(state = initialState.educationSection, action) {
    console.log(action.type);
    switch (action.type) {
        case actionTypes.ADD_EDUCATION:
            // first entry 
            return {
                ...state,
                ...action.education
            }
        default:
            return state;

    }
}