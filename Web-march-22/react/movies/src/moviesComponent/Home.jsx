// rfce
import React from 'react';
import "./Header.css";
import "./Banner.css";

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
    React.useEffect(async function () {
        // it is used to make request
        let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key={apikey}");
        // response -> you will get in buffer -> convert it into json
        let data = await response.json();
        console.log("data", data);
    }, []);
    return (
        <h1>Banner</h1>
    )
}
//1.  go to this websitehttps://www.themoviedb.org/
// signup to tmdb 
// verify your emailId
// go to account page -> settings-> api
// create -> developer-> request api -> form fill-> you will get an api key

//2. go to this website https://developers.themoviedb.org/3/getting-started/introduction
// search for -> trending-> tryout-> 
// put your api key, media -> movies, time_window:week 
// then you will get the link to get trending  movies -> copy and use it in useEffect














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
function UseffectExplainer() {
    let [count, setCount] = React.useState(0);
    let [count5, setCount5] = React.useState(0);
    // lifecyle method
    console.log("fn is executed");
    function effectFn() {
        console.log("I am an effect")
    }
    function incrementCount() {
        setCount(count + 1);
    }
    function incrementCount5() {
        setCount5(count + 5);
    }

    // 1. it is a hook that executes a fn passed into it after 
    // first render only once ->
    // React.useEffect(effectFn, [])

    // 2. it is a hook that executes a fn passed into it after 
    //    first render and everytime when state of 
    //     any state var changes
    //    React.useEffect(effectFn);

    // 3.it is a hook that executes a fn passed into it after 
    //   first render and everytime when state of a 
    //   state variable that is passed in dependency array 
    //   is changed 
    // React.useEffect(effectFn, [count])

    return (
        <>
            <h1> I am banner</h1>
            {console.log("render is done")}
            <div>Main count {count}</div>
            <button onClick={incrementCount}>+</button>
            <div>Main count {count5}</div>
            <button onClick={incrementCount5}>+5</button>
        </>
    )
}
