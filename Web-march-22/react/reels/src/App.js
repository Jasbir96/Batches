
import { Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from "./components/Login";
import PageNotFound from './components/PageNotFound';
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import { Route,Redirect } from "react-router-dom";
function App() {
  return (
    <>
      <h1>Reels App</h1>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/signup">
          <Signup></Signup>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Redirect from="/home" to="/"></Redirect>
        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>

    </>

  );
}

export default App;
