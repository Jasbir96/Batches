import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { connect } from "react-redux";
const PrivateRoute = (props) => {
    // map state to props
    let auth = props.auth;
    let Component = props.component;
    // /is loaded -> get
    console.log(auth.uid);
    return (<Route {...props}
            render={({ props }) => {
                return( auth.uid ? 
                    <Component {...props} />
                 : <Redirect {...props}to="/"
                    />)
                
            }
            }
        />
    );
};

function mapStateToProps(state) {
    return { auth: state.firebase.auth }
}
export default connect(mapStateToProps)(PrivateRoute);
