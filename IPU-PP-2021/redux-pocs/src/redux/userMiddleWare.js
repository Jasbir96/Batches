// loading
// error
// data
export default async function userFetchMiddleWare(dispatch) {
    try {
        let resp = await
            fetch
                ("https://jsonplaceholder.typicode.com/users");
        let users = await resp.json();
        dispatch({
            type: "success_users",
            payload: users
        })
    } catch (err) {
        dispatch({
            type: "error_users",
            payload: err.message
        })
    }
}