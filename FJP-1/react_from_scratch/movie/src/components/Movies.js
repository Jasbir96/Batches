import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable';
import Pagination from "./Pagination";
import { useEffect } from 'react';

function Movies(props) {
  let [searchText, setSearchText] = React.useState("");
  let [moviesCount, setCount] = React.useState(4);
  // *******************Movies table get *********************************************

  const [content, setContent] = React.useState([]);
  const [isLoaded, setLoaded] = React.useState(true);
  const [cPage, setcPage] = React.useState(1);

  useEffect(async function fn() {
    // fetch is inbuilt feature of browser that makes the request to get data -> promise based
    let response = await fetch('https://react-backend101.herokuapp.com/movies');
    response = await response.json();
    // console.log(response); 
    setLoaded(false);
    setContent(response);
  }, []);
  // ****************************************************************
  // ****************************************************************
  const setGlobalSearchText = (searchText) => {
    console.log("movies : " + searchText);
    setSearchText(searchText);
  }
  const setGlobalCount = (moviesCount) => {
    console.log("movies : " + moviesCount);
    setCount(moviesCount);
  }
  // console.log("movies : " + props.cGenre)
  return (<div >
    <InputBox setGlobalSearchText
      ={setGlobalSearchText}
      setGlobalCount
      ={setGlobalCount}
    ></InputBox>
    <MoviesTable searchText={searchText}
      moviesCount={moviesCount}
      cGenre={props.cGenre}
      content={content}
      isLoaded={isLoaded}
      setContent={setContent}
      cPage={cPage}
    ></MoviesTable>

    <Pagination
      moviesCount={moviesCount}
      content={content}
    ></Pagination>
  </div>
  )
}
export default Movies;