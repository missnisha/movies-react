import React from 'react';
import '../styles.css';
import {
    Link
  } from "react-router-dom";
const API_BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '/images?api_key=e0c035f376fc2d0250266fa9b0999fd4&language=en-US';

const RenderCurrentMovies = (props) => {
    const { item } = props;
    const { title, poster_path, id } = item;
    const imgStyles = { backgroundImage: `url('https://image.tmdb.org/t/p/w500/${poster_path}')`}
    return (
            <div className="single-movie">
                <img className= "movie-img" src={`https://image.tmdb.org/t/p/w500/${poster_path}`}></img>
            
                <div className="movie-content"> 
                    <hr />
                <div className="movie-bar">
                    <Link className="view-more" to={`Detail/${id}`}>View more</Link>
                    
                </div>
                   
                </div>
                </div>
        
    )
}

export default RenderCurrentMovies



