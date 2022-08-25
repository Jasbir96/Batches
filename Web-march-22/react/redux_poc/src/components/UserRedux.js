
import React, { useEffect } from 'react';
import { connect } from "react-redux"
import getUserMiddleWare from '../redux/user/userMiddleWare';
function UserRedux(props) {
    const loading = props.loading;
    const user = props.userState;
    useEffect(() => {
        props.fetchUser();
    }, [])
    return (
        <>
            {loading == true
                ? <h1>...Loading</h1> :
                <h2>userData :{user}</h2>}
        </>
    )
}
function mapStateToProps(store) {
    return store.User;
}
function mapDispatchToProps(dispatch) {
    return {
        fetchUser: () => {
            // middleware 
            dispatch(getUserMiddleWare);
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)
    (UserRedux);