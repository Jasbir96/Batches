// npm i react-router-dom@5.3.1
import React, { useContext } from 'react';
import Feed from "./components/Feed";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import { AuthContextProvider, AuthContext } from "./context/AuthContext";
import { Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <>
      {/* which component should render on which path */}
      <AuthContextProvider>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <PrivateRoute path="/feed"
            comp={<Feed></Feed>}
          >
          </PrivateRoute>
          <PrivateRoute path="/profile"
            comp={<Profile></Profile>}
          >
          </PrivateRoute>
          <Route>
            <PageNotFound></PageNotFound>
          </Route>

          {/* <Route path="/">
            <Feed></Feed>
          </Route>
          <Route path="/" render={(props) => {
            return <Feed {...props}></Feed>
          }}></Route> */}
        </Switch>
      </AuthContextProvider>
    </>
  );
}
function PrivateRoute(props) {
  console.log("private Route",props)
  let Component = props.comp;
  // check -> are you loggedIN
  let cUser = useContext(AuthContext);
  // cuser-> null ->logi page
  // cuser-> anything 
  return (
    <Route
      {...props}
      render={
        (props) => {
          // logic
          return cUser != null ? <Component {...props}>
          </Component> : <Redirect 
          {...props}
          to="/login"></Redirect>
        }
      }
    ></Route>
  )
}

export default App;