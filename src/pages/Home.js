
import React, { useState } from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination'
import CurrentMoviesList from '../components/CurrentMoviesList'
import SlideList from '../components/SlideList'
import CurrentTitle from '../components/CurrentTitle'
import { Row, Col } from 'antd';
import Footer from '../components/Footer';




const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [id, setId] = useState();
    return (
        <>  
        <Header />
        <SlideList page={currentPage}/>
        <CurrentTitle />
        <CurrentMoviesList page={currentPage}/>
        <Pagination page={currentPage} setPage={setCurrentPage}/>
        <Footer />
        
        
        </>  
    )
}

export default Home;