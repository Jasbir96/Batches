import Login from "./Components/Login";
import Feed from "./Components/Feed";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";
import AuthProvider from "./Context/AuthProvider";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Context/AuthProvider";
import { useContext } from "react";
// let isAuthenticated = false;
function App() {
  return (   <>
      {/* <h1>Hello Reels</h1> */}
      {/* <Login></Login> */}
      {/* <Todo></Todo> */}
      {/* 3. */}
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <ProtectedRoute path="/feed" abc={Feed}></ProtectedRoute>
          <ProtectedRoute path="/profile" abc={Profile}></ProtectedRoute>
          <Redirect path="/" to="/feed"></Redirect>
        </Switch>
      </AuthProvider>
    </>
  );
}
function ProtectedRoute(props) {
  // use 
  let { currentUser } = useContext(AuthContext);
  let Component = props.abc;
  return (<Route {...props} render={(props) => {
    // console.log(isAuthenticated);
    return (currentUser?
    <Component {...props} ></Component> : 
    <Redirect to="/login"></Redirect>
    )
  }}></Route>
  )
}
export default App;