import React from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { isLoaded } from 'react-redux-firebase';
import Header from "./Header";
import UploadVideo from './UploadVideo';
function Home(props) {
    return (
        <>
            {
                isLoaded(props.firebase.auth) &&
                    props.firebase.auth?.uid == undefined ? <Redirect to="/login"></Redirect> :
                    <>
                        <Header></Header>
                        <UploadVideo userId={props.firebase.auth.uid}></UploadVideo>
                        <h2>Feed</h2>
                    </>
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


export default connect(mapStateToProps)(Home);