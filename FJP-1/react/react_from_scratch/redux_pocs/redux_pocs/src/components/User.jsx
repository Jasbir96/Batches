import React from 'react'
import { useEffect, useState } from 'react'
import { connect } from "react-redux";
import userFetchMiddleWare from '../redux/reducers/user/userMiddleWare';
function User(props) {
    console.log(props);
    useEffect(function fn() {
        props.fetchUser();
    }, []);
    return (
        <>
            <h1>USER</h1>
            {props.loading == true ?
                <div>Loading</div> :
                <h2>{props.users.name}</h2>

            }
        </>
    )
}
function mapStatetoProps(store) {
    return store.User;
}
function mapDispatchtoProps(dispatch) {
    return {
        fetchUser: () => {
            // function
            return dispatch(userFetchMiddleWare);
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(User);
