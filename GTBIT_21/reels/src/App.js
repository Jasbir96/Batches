import Login from "./Components/Login";
import Feed from "./Components/Feed";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";
import AuthProvider from "./Context/AuthProvider";
import { Switch, Route, Redirect } from "react-router-dom";
let isAuthenticated = false;
function App() {
  return (
    <>
      {/* <h1>Hello Reels</h1> */}
      {/* <Login></Login> */}
      {/* <Todo></Todo> */}
      {/* 3. */}
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/feed" component={Feed}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Redirect path="/" to="/feed"></Redirect>
        </Switch>
      </AuthProvider>
    </>
  );
}
function ProtectedRoute(props) {
  console.log(props);
  let Component = props.abc;
  return (<Route {...props} render={(props) => {
    console.log(isAuthenticated);
    return (isAuthenticated == true ? <Component {...props} ></Component> : <Redirect to="/login"></Redirect>
    )
  }}></Route>

  )
}
export default App;