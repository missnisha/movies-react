
import React, { useState, useEffect, useCallback } from 'react';
import MoviesLogic from '../logic/MoviesLogic'
import CurrentListItem from '../components/CurrentListItem'
 
const CurrentList = ({ page }) => {
    const [movies, setMovies] = useState([]);

    const getMovies = useCallback(async (currentPage) => {
        
        const moviesArray = await MoviesLogic.fetchMovies(currentPage);
        setMovies(moviesArray.results);
    }, [])

    useEffect(() => {
        getMovies(page)
    }, [getMovies, page])

    return (
        <div className="movies">
            {movies.map(movie =>{
                return <CurrentListItem item={movie} key={movie.id}/>
                        
            })}
        </div>
    )
}
export default CurrentList

