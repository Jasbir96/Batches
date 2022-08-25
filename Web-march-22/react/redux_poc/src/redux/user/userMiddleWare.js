// if componenet can;t provide the payload data 
// you will use a middleware
import axios from "axios";
// that middleware will recieve you dispatch
async function getUserMiddleWare(dispatch) {
    let res = await axios("https://jsonplaceholder.typicode.com/users/1");
    console.log("jsonData", res.data);
    let user = res.data;
    dispatch({ type: "setUser", payload: user })
}
export default getUserMiddleWare;