export function signInMiddleWare(email, password) {
    return async function (dispatch, getStore, { getFirebase }) {
        // how are you going to get auth to your middleware 
        try {
            let firebase = getFirebase();
            let auth = firebase.auth();
            let userCreds = await auth
                .signInWithEmailAndPassword(email, password);
            console.log("user logged In", userCreds);
            dispatch({
                type: "LOGIN_SUCCESS",

            })
        } catch (err) {
            dispatch({
                type: "LOGIN_FAILURE",
                payload: err.message
            })
        }
    }
}
export function signOutMiddleWare() {
    return async function (dispatch, getStore, { getFirebase }) {
        // how are you going to get auth to your middleware 
        try {
            let firebase = getFirebase();
            let auth = firebase.auth();
            await auth.signOut();
            console.log("logged Out");
            dispatch({
                type: "SIGNOUT",
            })
        } catch (err) {
            dispatch({
                type: "SIGNOUT_FAILURE",
                payload: err.message
            })
        }
    }
}