import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import '../styles.css';
const API = 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US'

const Detail = (props) => {
    const { id } = useParams();
    const { item } = props;
    const { description, title, backdrop_path, poster_path} = item;
    const imgStyles = { backgroundImage: `url('${poster_path}')`}
 return (
     <div className="Detail">
        <p>detail</p>
     </div>
     
     
 )
} 
export default Detail;

