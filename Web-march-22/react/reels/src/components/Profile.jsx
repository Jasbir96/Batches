import React from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { isLoaded } from 'react-redux-firebase';
function Profile(props) {

    console.log(props.firebase.auth)
    return (
        <>
            {
                isLoaded(props.firebase.auth) && props.firebase.auth?.uid == undefined ? <Redirect to="/login"></Redirect> :
                    <div>Profile</div>
            }
        </>
    )
}
function mapStateToProps(store) {
    return {
        auth: store.auth,
        firebase: store.firebase
    };
}


export default connect(mapStateToProps)(Profile);