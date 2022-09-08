import { storage } from "../../firebase";
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
            const userCreds = await auth
                .createUserWithEmailAndPassword
                (userDataObj.email, userDataObj.password);
            const userId = userCreds.user.uid;

            alert("user signed up");
            // 2. uploading user image
            const uploadtask = storage.ref(`/users/${userId}/profileImage`).put(userDataObj.filePath);
            uploadtask.on("state_changed", progressCb, errorCb, successCb)
            function progressCb(snapShot) {
                var progress = (
                    snapShot.bytesTransferred /
                    snapShot.totalBytes) * 100;
                console.log("Progress: ", progress, "%");
            }
            function errorCb(err) {
                console.log(err.message);
                console.log(err.payload);
            }
            async function successCb() {
                // image upload -> complete
                // img url
                let imgUrl = await uploadtask.snapshot.ref.getDownloadURL()
                //  doc -> img url -> upload -> firestore
                const getCurrentTimeStamp = firebase
                    .firestore
                    .FieldValue
                    .serverTimestamp
                let docSnap = await firestore.collection("users")
                    .doc(userId).set({
                        name: userDataObj.name,
                        email: userDataObj.email,
                        createdAt: getCurrentTimeStamp(),
                        profileImageLink: imgUrl
                    })
                dispatch({ type: "SIGNUP_SUCCESS" })
            }
        } catch (err) {
            dispatch({ type: "SIGNUP_FAILURE", payload: err.message })
        }
    }
}