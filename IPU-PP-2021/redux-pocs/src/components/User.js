import React, { useEffect, useState } from 'react';
import userFetchMiddleWare from '../redux/userMiddleWare';
import { connect } from "react-redux";
function User(props) {
    // const [, setLoading] = useState();
    // const [, setError] = useState('');
    // const [users, setUsers] = useState([]);
    const { loading, error, users } = props;
    useEffect(async () => {
        // async date get 
        props.fetchUser();
        console.log("will make async request");
    }, []);
    return (
        <div>
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : <>
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
// export default User;
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
export default connect(mapStatetoProps,mapDispatchtoProps)(User);
