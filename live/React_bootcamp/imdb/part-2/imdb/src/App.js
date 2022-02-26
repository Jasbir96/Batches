import './App.css';
import NavBar from "./components/NavBar";
import Banner from './components/Banner';
import Movies from './components/Movies'
import Pagination from './components/Pagination'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Favourites from './components/Favourites'

function App() {
  return (
    <BrowserRouter>
      {/* <h1> Hello Pepcoders !! 🚀🚀</h1> */}
      {/* <h2>NavBar</h2> */}
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<>
          <Banner/>
          <Movies />
          {/* <Pagination /> */}
        </>}/>
        <Route path="/favourites" element={<Favourites />}/>
      </Routes>
      {/* <Banner></Banner> */}
      {/* <Movies></Movies> */}
      {/* <h2>Banner</h2> */}
      {/* <h2>Trending </h2> */}
      {/* <Pagination></Pagination> */}
      {/* <h2>Pagination</h2> */}
    </BrowserRouter>
  );
}
export default App;
