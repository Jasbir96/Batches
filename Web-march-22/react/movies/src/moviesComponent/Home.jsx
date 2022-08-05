// rfce
import React from 'react';
import "./Header.css";
import "./Banner.css";
import "./MovieList.css";
import "./Pagination.css";

function Home() {
    const [pageNo, setpageNumber] = React.useState(1);
    function incPageNumber() {
        setpageNumber(function (pageNo) {
            return pageNo + 1;
        });
    }
    function descPageNum() {
        if (pageNo == 1) {
            return;
        }
        setpageNumber(function (pageNo) {
            return pageNo - 1;
        });
    }
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <MovieList pageNo={pageNo}></MovieList>
            <div className="pagination">
                <div className="pagination_btn"
                    onClick={descPageNum}
                >Previous</div>
                <div className="page_no">{pageNo}</div>
                <div className="pagination_btn"
                    onClick={incPageNumber}
                >Next</div>
            </div>
        </>
    )
}

export default Home;
// banner
function Banner() {
    let [firstMovie, setFirstMovie] = React.useState("");
    React.useEffect(function(){
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
function MovieList(props) {
    console.log(props.pageNo);
    let [movies, setMovie] = React.useState("");
    let [value, setValue] = React.useState("");
    function setText(e) {
        let newValue = e.target.value;
        setValue(newValue);
    }
    React.useEffect(function fn() {
        async function fetchData() {
            // it is used to make request
            let response = await fetch
                ("https://api.themoviedb.org/3/trending/movie/week?api_key=16e7df484a81f634d85b2f25f938585d&page=" + props.pageNo);
            // response -> you will get in buffer -> convert it into json
            let data = await response.json();
            console.log("data", data);
            let movies = data.results;
            // console.log("movies", movies)
            setMovie(movies);
        }
        fetchData();

    }, [props.pageNo]);

    function filterLogic(searchText, movieArray) {

        let filteredMovieArray = [];
        for (let i = 0; i < movieArray.length; i++) {
            let upperSearchText = searchText.toUpperCase();
            let movieName = movieArray[i].original_title;
            let upperText = movieName.toUpperCase();
            // console.log(upperText);
            let ans = upperText.includes(upperSearchText);
            if (ans == true) {
                filteredMovieArray.push(movieArray[i]);
            }
        }
        return filteredMovieArray;
    }
    let searchedMovies = filterLogic(value, movies);

    return (
        // you can recieve themovies array and filter it accoring to you search text 
        // and show only filterd movies 
        <>
            <h2>Trending Movies</h2>
            <input onChange={setText} value={value}></input>
            {
                movies == "" ? <h2>Loading Movies</h2 > :
                    <div className="trending_box">
                        {searchedMovies.map(function (movieObj, idx) {
                            return (
                                <div key={idx} className="poster_box">
                                    <h2>{movieObj.original_title}</h2>
                                    <img src={"https://image.tmdb.org/t/p/w500/" + movieObj.poster_path} className="poster_img"></img>
                                </div>
                            )
                        })}
                    </div>
            }
        </>



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

