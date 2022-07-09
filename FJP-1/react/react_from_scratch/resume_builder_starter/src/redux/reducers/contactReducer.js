import initialState from './initialState.json';
import * as actionTypes from '../actionTypes';
export default function contactReducer(state = initialState.contactSection, action) {
    console.log(action.type);
    switch (action.type) {
        case actionTypes.ADD_CONTACT:
            // first entry 
            return {
                ...state,
                ...action.contact
            }
        default:
            return state;

    }
}