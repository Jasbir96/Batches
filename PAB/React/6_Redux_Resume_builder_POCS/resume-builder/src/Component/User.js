import React, {  useEffect } from 'react';
import { userFetchMiddleWare } from '../redux/user/userFetchMiddleWare';
import { connect } from "react-redux";
function User(props) {
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState('');
    // const [users, setUsers] = useState([]);
    const { loading, error, users } = props;
    useEffect( () => {
        // try {
        //     let resp = await fetch("https://jsonplaceholder.typicode.com/users");
        //     let users = await resp.json();
        //     setLoading(false);
        //     setUsers(users);
        // } catch (err) {
        //     setLoading(false);
        //     setError(err.message);
        // }
        props.fetchUser();
        console.log("will make async request");
    }, []);
    return (
        <div>
            {loading ? <h2>Loading...</h2>
                : error ?
                    <h2>{error}</h2>
                    : <>
                        <h2>User List</h2>
                        {users.map((user) => {
                            return (
                                <li
                                    style={{ listStyle: "none" }}
                                    key={user.id}>{user.name}</li>
                            )
                        })}
                    </>}
        </div>
    )
}
function mapStatetoProps(store) {
    return store.User;
}
function mapDispatchtoProps(dispatch) {
    return {
        fetchUser: () => {
            return dispatch(userFetchMiddleWare);
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(User);
