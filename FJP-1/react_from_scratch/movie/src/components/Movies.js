import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable';
import Pagination from "./Pagination";

function Movies() {
  return (<div >
    <InputBox></InputBox>
    <MoviesTable></MoviesTable>
    <Pagination></Pagination>
  </div>
    )
}

export default Movies;