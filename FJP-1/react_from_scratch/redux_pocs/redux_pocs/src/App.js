import './App.css';
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

  );
}
export default App;
