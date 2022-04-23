import React, { useState } from 'react';
function MoviesTable(props) {
  // so i will run only one time after first execution of return statement  
  let { content, isLoaded, setContent ,filteredContent} = props

  const deleteMovie = (tobeDeletedMovieId) => {
    let restOfTheMovies = content.movies.filter((movie) => movie._id !== tobeDeletedMovieId);
    let newObject = { movies: restOfTheMovies };
    setContent(newObject);
  }

  // data
  return (
    <div>{isLoaded == true ?
      <div className="font-bold">Loading...</div > :
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-2">#</th>
            <th className="px-2 "> Title</th>
            <th className="px-2">Genre</th>
            <th className="px-2">Stock</th>
            <th className="px-2">Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredContent.map(
            function (movie, idx) {
              return <tr key={movie._id} >
                <td className="px-2 text-center">{idx + 1}</td>
                <td className="px-2 text-center">{movie.title}</td>
                <td className="px-4 text-center">{movie.genre.name}</td>
                <td className="px-2 text-center">{movie.numberInStock}</td>
                <td className="px-2 text-center">{movie.dailyRentalRate}</td>
                <td>
                  <button className="bg-red-500 hover:bg-red-700 text-white 
        font-bold py-2 px-4 rounded"  onClick={function () {
                      deleteMovie(movie._id);
                    }}>DELETE</button></td>
              </tr>
            })}
        </tbody>
      </table>
    }
    </div>
  )
}
export default MoviesTable;