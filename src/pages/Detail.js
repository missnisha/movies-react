import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {fetchMovieDetails} from '../service/ApiService';
import '../styles.css';
const API_BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '/images?api_key=e0c035f376fc2d0250266fa9b0999fd4&language=en-US';

const Detail = (props) => {
    const { id } = useParams();
    const { item } = props;
    const { overview, description, title, backdrop_path, poster_path} = item || {};
    const imgStyles = { backgroundImage: `url('https://image.tmdb.org/t/p/w500/${poster_path}')`}
 return (
     <div className="Detail">
        <p>detail</p>
     
        <p>{id}</p>
       
     </div>
     
     
 )
} 
export default Detail;

