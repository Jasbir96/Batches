import React from 'react';
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
export default MovieList;