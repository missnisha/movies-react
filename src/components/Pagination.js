import React from 'react';

const Pagination = ({ page, setPage }) => {

    function setPreviousPage() {    
       if (page !== 1) {
        setPage(page - 1);
       } 
        
    }

    function setNextPage() {
        setPage(page + 1);
        
    }

 return (
    <div className='pagination'>
    <button className='pagination-buttons' onClick={setPreviousPage}>Back</button>
    <p className='pagination-number'>{page}</p>    
    <button className='pagination-buttons' onClick={setNextPage}>Next Page</button>
    </div>
 )
} 
export default Pagination; 