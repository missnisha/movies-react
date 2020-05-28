import React from 'react';
import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';
import '../styles.css';

const Slide = (props) =>{
    const { item } = props;
    const { title, backdrop_path, id, overview } = item;
    const imgPath =`https://image.tmdb.org/t/p/original/${backdrop_path}`;
    
        return ( 
            
                <div className="movie" style={{ backgroundImage: `url('${imgPath}')`}}>
                    {/* 
                        <img src={imgPath} alt="backdrop image" className="backdrop-img" /> */}

                    <div className="details-movie">
                        
                        <div className="overview">
                        <h3 className="title">{title}</h3>
                        <p>{overview}</p>
                        </div>
                        <Link to={`item/${id}`}>
                            <Button type="primary" className="button-view">View More</Button>
                        </Link>
                    </div>


                </div>
        

        )
    }
    

   
export default Slide