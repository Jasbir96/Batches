import './App.css';
import MoviesPage from './component/MoviesPage';
import New from './component/New';
import { Switch, Route } from "react-router-dom";
import NavBar from './component/NavBar';
import Login from './component/Login';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    movies: []
  }
  setMovies = (array) => {
    this.setState({
      movies: array
    })
  }
  deleteEntry = (id) => {
    let filtereMovies =
      this.state.movies.filter((movieObj) => {
        return movieObj._id != id;
      })
    this.setState({
      movies: filtereMovies
    })
  }
  async componentDidMount() {
    // console.log(2);
    let resp = await fetch("https://react-backend101.herokuapp.com/movies");
    let jsonMovies = await resp.json();
    this.setState({
      movies: jsonMovies.movies
    });

  }
  addMovie = (obj) => {

    let { title, genre, stock, rate } = obj;
    let genreObj = [{ _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" }
    ];
    for (let i = 0; i < genreObj.length; i++) {
      if (genreObj[i].name == genre) {
        genre = genreObj[i]
      }
    }
    let movieObj = {
      _id: Date.now(),
      title,
      genre,
      dailyRentalRate: rate,
      numberInStock: stock
    }

    let copyofMovies = [...this.state.movies, movieObj];
    this.setState({
      movies: copyofMovies
    })



  }
  render() {
    console.log("App");
    return (
      <>
        <NavBar></NavBar>
        <Switch>
          <Route path="/new" render={
            (props) => {
              return (<New {...props}
                addMovie={this.addMovie}
              ></New>)
            }
          }></Route>
          {/* <Route path="/login" component={Login}></Route> */}
          <Route path="/" render={(props) => {
            return (<MoviesPage {...props}
              deleteEntry={this.deleteEntry}
              movies={this.state.movies}
              setMovies={this.setMovies}></MoviesPage>)
          }}></Route>
        </Switch>
      </>
    )
  }
}



