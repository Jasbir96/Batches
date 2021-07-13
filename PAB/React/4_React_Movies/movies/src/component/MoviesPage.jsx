import React, { Component } from 'react'
import { getMovies } from '../temp/MovieService';
import List from "./List.jsx";
import Pagination from "./Pagination.jsx";
import { Link } from "react-router-dom";
export default class MoviesPage extends Component {
    state = {
        genres: [{ id: 1, name: "All Genres" }],
        currSearchText: "",
        limit: 4,
        currentPage: 1,
        cGenre: "All Genres"
    }
    setCurrentText = (e) => {
        let task = e.target.value;
        // filter 
        this.setState({
            currSearchText: task
        })
    }
    sortByRatings = (e) => {
        let className = e.target.className;
        let sortedMovies;
        let { movies } = this.props;
        if (className == "fas fa-sort-up") {
            sortedMovies = movies.sort((movieObjA, movieObjB) => {
                return movieObjA.dailyRentalRate - movieObjB.dailyRentalRate;
            });
        } else {
            sortedMovies = movies.sort((movieObjA, movieObjB) => {
                return movieObjB.dailyRentalRate - movieObjA.dailyRentalRate;
            });
        }
        this.props.setMovies(sortedMovies);
    }
    sortByStock = (e) => {
        let className = e.target.className.trim();
        let sortedMovies;
        let { movies } = this.props;
        if (className == "fas fa-sort-up") {
            sortedMovies = movies.sort((movieObjA, movieObjB) => {
                return movieObjA.numberInStock - movieObjB.numberInStock;
            });
        } else {
            sortedMovies = movies.sort((movieObjA, movieObjB) => {
                return movieObjB.numberInStock - movieObjA.numberInStock;
            });
        }

        this.props.setMovies(sortedMovies);
    }
    changelimit = (e) => {
        // console.log("hello");
        let currLimit = e.target.value;
        if (currLimit < 1)
            return;
        // console.log(currPage);
        this.setState({
            limit: currLimit
        })
    }
    changeCurrentPage = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }
    groupBygenre = (name) => {
        this.setState({
            cGenre: name,
            currSearchText: ""
        })
    }
    async componentDidMount() {
        // console.log(2);
        let resp = await fetch("https://react-backend101.herokuapp.com/genres");
        let jsonGenres = await resp.json() 
        this.setState({
            genres: [...this.state.genres, ...jsonGenres.genres]
        });
    }
    render() {
        console.log("movies");
        let { currSearchText, limit, currentPage, genres, cGenre } = this.state;
        let { movies, deleteEntry } = this.props;
        // console.log(movies);
        //   genre
        let filteredArr = movies;
        if (cGenre != "All Genres") {
            filteredArr = filteredArr.filter((movieObj) => {
                return movieObj.genre.name == cGenre;
            })
        }
        // search term 
        if (currSearchText != "") {
            filteredArr = filteredArr.filter((movieObj) => {
                let title = movieObj.title.trim().toLowerCase();
                // console.log(title);
                return title.includes(currSearchText.toLowerCase());
            })
        }
        // impliment
        // console.log(filteredArr);
        // si -> (pagenumber-1)*limit;
        // eidx = si+limit;
        // number of pages 
        // paginate 
        let numberofPage = Math.ceil(filteredArr.length / limit);
        let si = (currentPage - 1) * limit;
        let eidx = si + limit;
        filteredArr = filteredArr.slice(si, eidx);
        return (

            <div className="row">
                {/* 12 part */}
                <div className="col-3">
                    <List genres={genres} groupBygenre={this.groupBygenre}></List>
                </div>
                <div className="col-9">
                    <button className="btn btn-primary">
                        <Link to="/new" className="text-light" >New </Link>
                    </button>
                    <input type="search" value={currSearchText}
                        onChange={this.setCurrentText} />
                    <input type="number" className="col-1"
                        placeholder="no of elements/page"
                        value={limit}
                        onChange={this.changelimit}
                    />
                    {/* <input type="text" className="pageNumber"
                        placeholder="page number" /> */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">
                                    <i className="fas fa-sort-up" onClick={this.sortByStock}></i>
                                    Stock
                                    <i className="fas fa-sort-down" onClick={this.sortByStock}></i>
                                </th>
                                <th scope="col">
                                    <i className="fas fa-sort-up" onClick={this.sortByRatings}></i>
                                    Rate
                                    <i className="fas fa-sort-down" onClick={this.sortByRatings}></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredArr.map((movieObj) => {
                                return (<tr scope="row" key={movieObj._id}>
                                    <td> </td>

                                    <td>{movieObj.title} </td>
                                    <td>{movieObj.genre.name}</td>
                                    <td>{movieObj.numberInStock}</td>
                                    <td>{movieObj.dailyRentalRate}</td>
                                    <td><button type="button" className="btn btn-danger"
                                        onClick={() => {
                                            deleteEntry(movieObj._id);
                                        }}>Delete</button></td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                    <Pagination
                        numberofPage={numberofPage}
                        currentPage={currentPage}
                        changeCurrentPage={this.changeCurrentPage}
                    ></Pagination>

                </div>
            </div >

        )
    }
}

// currentPage
// this.changeCurrentPage(pageNumber)
// /function
// no of pages 
// current page

// genere array
// /groupBygenre


