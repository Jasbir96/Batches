// if componenet can;t provide the payload data 
// you will use a middleware
import axios from "axios";
// that middleware will recieve you dispatch
export async function getUserMiddleWare1(dispatch) {
    try {
        let res = await axios("https://jsonplaceholder.typicode.com/users/1");
        console.log("jsonData", res.data);
        let user = res.data;
        dispatch({ type: "setUser", payload: user })

    } catch (err) {
        dispatch
            ({ type: "setError", payload: "can't fetch data right now" });
    }
}

export  function getUserMiddleWare2(compData) {
    return async function (dispatch) {
        try {
            let res = await axios("https://jsonplaceholder.typicode.com/users/1");
            console.log("jsonData", res.data);
            let user = res.data;
            user.compData = compData
            dispatch({ type: "setUser", payload: user })
        } catch (err) {
            dispatch
                ({ type: "setError", payload: "can't fetch data right now" });
        }
    }
}
export default getUserMiddleWare;