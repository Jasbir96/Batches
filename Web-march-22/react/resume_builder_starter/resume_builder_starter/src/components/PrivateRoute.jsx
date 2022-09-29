import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
const PrivateRoute = ({ component: Component, ...remainingProps }) => {
    // map state to props alternative
    const auth = useSelector(store => store.firebase.auth);
    //    route -> component -> directly 
    // render -> return compoennt -> route
    console.log(remainingProps);
    return (
        <Route
            {...remainingProps}
            render={({ props }) =>
                isLoaded(auth) && !isEmpty(auth) ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                    {...props}
                        to="/login"
                    />
                )
            }
        />
    );
};
export default PrivateRoute;
