// dispatch mil jaata hai 
export default async function userFetchMiddleWare(dispatch) {
    let resp = await fetch
        ("https://jsonplaceholder.typicode.com/users/1");
    let users = await resp.json();
    dispatch({
        type: "success_users",
        payload: users
    })
}


