
import React, { useState, useEffect, useCallback } from 'react';
import MoviesLogic from '../logic/MoviesLogic'
import Slide from '../components/Slide'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
 
const SlideList = ({ page }) => {
    const [movies, setMovies] = useState([]);

    const getMovies = useCallback(async (currentPage) => {
        
        const moviesArray = await MoviesLogic.fetchMovies(currentPage);
        setMovies(moviesArray.results);
    }, [])

    useEffect(() => {
        getMovies(page)
    }, [getMovies, page])

    return (
        <Carousel autoplay className="slider-movies">
            {movies.map(movie => (
               <Slide item={movie} key={movie.id} />
                        
            ))}

        </Carousel>
    )
}
export default SlideList

