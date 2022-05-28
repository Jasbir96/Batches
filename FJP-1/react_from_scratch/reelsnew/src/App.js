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
          <RedirectToFeed path="/login" comp={Login}>
          </RedirectToFeed>
          <RedirectToFeed path="/signup" comp={Signup}>
          </RedirectToFeed>

          <PrivateRoute path="/feed"
            comp={Feed}
          >
          </PrivateRoute>
          <PrivateRoute path="/profile"
            comp={Profile}
          >
          </PrivateRoute>
          <Route>
            <PageNotFound></PageNotFound>
          </Route>
          <Redirect from="/" to="/feed"></Redirect>
        </Switch>
      </AuthContextProvider>
    </>
  );
}
function PrivateRoute(props) {
  console.log("private Route", props)
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

function RedirectToFeed(props) {
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
          return cUser != null ? <Redirect {...props} to="/feed">
          </Redirect> : <Component
            {...props}
          ></Component>
        }
      }
    ></Route>
  )
}
export default App;