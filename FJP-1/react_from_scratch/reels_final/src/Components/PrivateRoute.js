import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  return (
    //We use this method when we use an inline  function to tell the route what to render
    // If we use the same thing in component prop of route that would lead to a problem
    // as on every render it would create a new component instead of updating the existing one
    // this would lead to unnecessary unmounting and mounting
    <Route
      {...rest}
      render={props => {
        // console.log(props);
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}
