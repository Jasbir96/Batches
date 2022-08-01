// rfce
import React from 'react';
import "./Header.css";
import "./Banner.css";
// movies -> result array 
import { results } from "../movies";
// console.log(results);
function Home() {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <MovieList></MovieList>
            <Pagination></Pagination>
        </>
    )
}
export default Home;
// banner
function Banner() {
    // state variable
    let [firstMovie, setMovie] = React.useState("");
    // that will run just after first render 
    // function ,[]
    // lifeccyle method
    React.useEffect(
        function () {
            console.log("useEffect")
            // request emulate 
            setTimeout(function () {
                let firstMovie = results[0];
                // replace
                setMovie(firstMovie)
            }, 3000)
        }
        , [])
    console.log("render")
    return (
        <>{firstMovie == "" ? <h2>Loading...</h2> :
            <>
                <h2>{firstMovie.title}</h2>
                <div>{firstMovie.overview}</div>
                <img
                    className='poster_img'
                    src={"https://image.tmdb.org/t/p/original/" + firstMovie.poster_path}>
                </img>
            </>
        }
        </>
    )
}

















//movieList
function MovieList() {
    return (
        <h2>MovieList</h2>
    )
}
// pagination
function Pagination() {
    return (
        <h2>Pagination</h2>
    )
}
// header

function Header() {
    return (
        <div className="flex">
            <img src
                ="https://img.icons8.com/external-bearicons-blue-bearicons/50/000000/external-movie-call-to-action-bearicons-blue-bearicons.png">
            </img>
            <h2>Movies</h2>
            <h2>Favorites</h2>
        </div>
    )
}