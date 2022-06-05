import './App.css';
// import Ball from './components/simpleReact/Ball';
// import Bat from './components/simpleReact/Bat';
// import BatuseReducer from './components/simpleReact/BatuseReducer';
import Ball from "./components/Ball";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Ball></Ball>
      </Provider>
    </>
    // <>
    //   <Ball></Ball>
    //   <Bat></Bat>
    //   <BatuseReducer></BatuseReducer>
    // </>

  );
}

export default App;
