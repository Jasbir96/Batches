import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable';
import Pagination from "./Pagination";

function Movies() {
  let [searchText, setSearchText] = React.useState("");
  let [moviesCount, setCount] = React.useState(9);
  const setGlobalSearchText = (searchText) => {
    console.log("movies : " + searchText);
    setSearchText(searchText);
  }
  const setGlobalCount = (moviesCount) => {
    console.log("movies : " + moviesCount);
    setCount(moviesCount);
  }
  return (<div >
    <InputBox setGlobalSearchText
      ={setGlobalSearchText}
      setGlobalCount
      ={setGlobalCount}
    ></InputBox>
    <MoviesTable searchText={searchText}
      moviesCount={moviesCount}
    ></MoviesTable>
    <Pagination></Pagination>
  </div>
  )
}
export default Movies;