import React from 'react';
import './static/scss/app.scss';
import 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/presentation/header';
import Footer from './components/presentation/footer';
import LandingPage from './components/presentation/landingPage';
import GettingStarted from './components/presentation/gettingStarted';
import Login from './components/presentation/login';
import Register from './components/presentation/register';
import AboutUs from './components/presentation/aboutUs';
import Contacts from './components/presentation/contact';
import Education from './components/presentation/education';
import Finalize from './components/presentation/finalizePage';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <PrivateRoute path="/education" component={Education}></PrivateRoute>
        <PrivateRoute path="/contact" component={Contacts}></PrivateRoute>
        <PrivateRoute path="/getting-started" component={GettingStarted}></PrivateRoute>
        <Redirect path="/resume-templates" to="/getting-started"></Redirect>
        <Route path="/about-us" component={AboutUs}></Route>
        <PrivateRoute path="/finalize" component={Finalize}></PrivateRoute>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/" component={LandingPage}></Route>
      </Switch>
      <Footer></Footer>
      {/* <Form></Form> */}
    </div>
  );
}
export default App;
// error coz of string
// const obj = {
//   FIRNAME: "first_name",
//   LASNAME: "last_name",
//   EMAIL: "email",
//   PHONE_NUM: "ph_num",

// }
function Form() {
  // we need ot create an object
  const [contacts, setContact] = React.useState({
  });

  function getValue(key) {
    if (contacts[key]) {
      return contacts[key];
    } else {
      return "";
    }
  }
  function setValue(e) {
    let value = e.target.value;
    let key = e.target.name;
    setContact({ ...contacts, [key]: value })
  }
  return (
    <div>

      <h2>First Name</h2>
      <input type="text" value={getValue("first_name")}
        name={"first_name"} onChange={setValue}></input>

      <h2>Last Name</h2>
      <input type="text"
        value={getValue("last_name")} name={"last_name"}
        onChange={setValue}
      ></input>

      <h2>Email</h2>
      <input type="text"
        value={getValue("email")} name={"email"} onChange={setValue}
      ></input>

      <h2>Phone</h2>
      <input type="text"
        name="phone" value={getValue("phone")}
        onChange={setValue}

      ></input>
    </div>
  )
}
