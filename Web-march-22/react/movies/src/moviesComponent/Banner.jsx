import React from 'react'
// banner
function Banner() {
    let [firstMovie, setFirstMovie] = React.useState("");
    React.useEffect(function () {
        async function fetchData() {
            // it is used to make request
            let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=16e7df484a81f634d85b2f25f938585d");
            // response -> you will get in buffer -> convert it into json
            let data = await response.json();
            console.log("data", data);
            let movies = data.results;
            // console.log("movies", movies)
            setFirstMovie(movies[0]);
        }
        fetchData();
    }, []);
    return (
        <>
            {firstMovie == "" ?
                <h2>Movies are yet to come</h2 > : <>
                    <h2>{firstMovie.original_title}</h2>
                    <img src={"https://image.tmdb.org/t/p/original" + firstMovie.backdrop_path} className="banner_img"></img>
                </>

            }
        </>
    )
}
export default Banner;