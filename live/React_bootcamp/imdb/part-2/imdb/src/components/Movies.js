import React, { useState, useEffect } from 'react';
import Image from '../banner.jpg'
import axios from 'axios'
import { Oval } from 'react-loader-spinner';
import Pagination from './Pagination';

function Movies() {

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [hover, setHover] = useState('')
    const [favourites, setFavourites] = useState([])

    function goAhead() {
        setPage(page + 1)
    }
    function goBack() {
        if (page > 1) {
            setPage(page - 1)
        }
    }
    useEffect(function () {

        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=5540e483a20e0b20354dabc2d66a31c9&page=${page}`).then((res) => {
            console.table(res.data.results)
            setMovies(res.data.results);
        }
        )
    }, [page])

    let add = (movie) => {
        let newArray = [...favourites, movie]
        setFavourites([...newArray])
        console.log(newArray)
    }

    return <>
        <div className="mb-8 text-center">
            <div className="mt-8 mb-8 font-bold text-2xl text-center">Trending Movies</div>
            {
                movies.length == 0 ?
                // loader
                    <div className='flex justify-center'>
                        <Oval
                            heigth="100"
                            width="100"
                            color='grey'
                            secondaryColor='grey'
                            ariaLabel='loading'
                        />
                    </div> :
                // movies
                    <div className="flex flex-wrap justify-center">
                        {
                            movies.map((movie) => (
                                <div className={`
                                    bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] 
                                    md:h-[30vh] md:w-[250px] 
                                    h-[25vh] w-[150px]
                                    bg-center bg-cover
                                    rounded-xl
                                    flex items-end
                                    m-4
                                    hover:scale-110
                                    ease-out duration-300
                                    relative
                                `}
                                    onMouseEnter={() => {
                                        setHover(movie.id)
                                    }}

                                    onMouseLeave={() =>
                                        setHover("")}
                                >
                                    {
                                        hover == movie.id && <>{
                                            !favourites.find((m) => m.id == movie.id) ?
                                                <div className='absolute top-2 right-2
                                    p-2
                                    bg-gray-800
                                    rounded-xl
                                    text-xl
                                    cursor-pointer
                                    '
                                                    onClick={() => add(movie)}
                                                >😍</div> : 
                                                <div className='absolute top-2 right-2
                                    p-2
                                    bg-gray-800
                                    rounded-xl
                                    text-xl
                                    cursor-pointer
                                    '
                                                    onClick={() => add(movie)}
                                                >❌</div>

                                        }


                                        </>
                                    }

                                    <div className="w-full bg-gray-900 text-white py-2 font-bold text-center rounded-b-xl">{movie.title} </div>
                                </div>
                            ))
                        }

                    </div>
            }

        </div>
        <Pagination pageProp={page} goBack={goBack} goAhead={goAhead} />
    </>
}

export default Movies;