import './App.css';
import Ball from "./components/Ball";
import BatuseReducer from "./components/simpleReact/BatuseReducer";
import Bat from "./components/Bat";
import { Provider } from "react-redux";
import store from "./store";
import User from "./components/User";
// import User from './components/simpleReact/User';
function App() {
  return (
    <>
      {/* <BatuseReducer></BatuseReducer> */}
      <Provider store={store}>
        <Ball></Ball>
        <Bat></Bat>
        <User></User>
      </Provider>
      {/* <User></User> */}
    </>

  );
}
export default App;
