import React, { useState, useEffect } from 'react'
function Genre(props) {
  const [isLoaded, setLoaded] = useState(true);
  const [content, setContent] = useState([]);
  const sendGenre = (e) => {
    console.log("genre : " + e.target.textContent)
    props.setGlobalGenre(e.target.textContent);
  }
  // so i will run only one time after first execution of return statement
    // useeffect -> outer function, async function  
  useEffect(function () {
    (async function () {
      // fetch is inbuilt feature of browser that makes the request to get data -> promise based
      let response = await fetch('https://react-backend101.herokuapp.com/genres');
      response = await response.json();
      // console.log(response); 
      setLoaded(false);
      setContent(response);
    })();
  }

    , [])
  return (
    <div className="Genre">
      <div className="
      mr-6 border-2 w-40 text-center h-10 font-bold"
        onClick={sendGenre}>All Genre</div>
      {isLoaded == true ?
        <div className="font-bold"> Loading...</div >
        : content.genres.map(function (genre) {
          return (< div
            key={genre._id}
            className="mr-6 border-2 w-40 text-center h-10 border-t-0 font-bold"
            onClick={sendGenre}
          >
            {genre.name}</div>
          )
        }
        )
      }
    </div >


  )
}

export default Genre