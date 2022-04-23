import React from 'react'

function Pagination(props) {
  let { content, moviesCount } = props;
  // total movies, // no of movies in single
  let pagesArr = [];
  if (content.movies) {
    let noOfPages = Math.ceil(content.movies.length / moviesCount);
    for (let i = 1; i <= noOfPages; i++) {
      pagesArr.push(i);
    }
  }

  return (
    // <div><button className="bg-blue-500  text-white 
    //  py-2 px-3 rounded">1</button>
    //  <button className="hover:bg-blue-500  border-2
    //  py-2 px-3 rounded">2</button>
    //  <button className="hover:bg-blue-500  border-2 
    //  py-2 px-3 rounded">3</button>
    //  </div>
    <>
      {pagesArr.map(function (pageNumber) {
        return (<button className="hover:bg-blue-500  border-2 
     py-2 px-3 rounded
     ">{pageNumber}</button>)
      })}
    </>


  )
}

export default Pagination