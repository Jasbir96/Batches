export function signInMiddleWare(email, password) {
    return async function (dispatch, getStore, { getFirebase }) {
        // how are you going to get auth to your middleware 
        try {
            let firebase = getFirebase();
            let auth = firebase.auth();
            let userCreds = await auth.signInWithEmailAndPassword(email, password);
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

export function signUpMiddleWare(userDataObj) {
    return async function (dispatch, getStore,
        { getFirebase, getFirestore }) {
        console.log("signup started");
        try {
            const firebase = getFirebase();
            const firestore = getFirestore();
            const auth = firebase.auth();
            // // 1. signup hoga
            console.log("Signing up");
            const userCreds = await auth.createUserWithEmailAndPassword
                (userDataObj.email, userDataObj.password);
            const userId = userCreds.user.uid;
            console.log("user signed up");
            // firestore -> user collection -> user add
            await firestore.collection("users").doc(userId).set({
                email: userDataObj.email,
                resumes: []
            })
            console.log("signup done ");
            dispatch({ type: "SIGNUP_SUCCESS" })
        } catch (err) {
            dispatch({ type: "SIGNUP_FAILURE", payload: err.message })
        }
    }
}
