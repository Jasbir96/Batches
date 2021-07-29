import * as actionTypes from "../actionTypes";
export const signInSuccess = (users) => {
    return {
        type: actionTypes.SIGN_IN_SUCCESS,

    }
}
export const signInFailed = (error) => {
    return {
        type: actionTypes.SIGN_IN_FAILED,
        payload: error
    }
}
// thunk 
export const signIn = (userData) => {
    // function
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        // loding start
        dispatch({ type: actionTypes.SIGN_IN_REQUEST })
        const firebase = getFirebase();
        try {
            console.log(userData);
            let data = await firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
            // console.log(data.user.uid);
            // loading false
            dispatch({ type: actionTypes.SIGN_IN_SUCCESS })
        }
        catch (err) {
            console.log("Error is ", err)
            // error true
            // loading false
            dispatch({ type: actionTypes.SIGN_IN_FAILED, error: err })
            setTimeout(() => {
                // error false
                dispatch({ type: actionTypes.REMOVE_ERROR })
            }, 2000)
        };
    }
}