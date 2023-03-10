// importing React
import React from 'react';


// exporting the Navigation  component for use and using currentPage handlePageChange 
// to handle tab changes to display different components
export default function Navigation({ currentPage, handlePageChange }) {

return(
    <ul className='nav nav-tabs col-md-10'>
        <li className='nav-item'>
            <a href='#home' onClick={() => handlePageChange('Home')} 
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}> Home </a>
        </li>
        <li className='nav-item'>
            <a href='#about' onClick={() => handlePageChange('About')} 
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}> About </a>
        </li>
        <li className='nav-item'>
            <a href='#porfolio' onClick={() => handlePageChange('Portfolio')} 
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}> Portfolio </a>
        </li>
        <li className='nav-item'>
            <a href='#contact' onClick={() => handlePageChange('Contact')} 
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}> Contact </a>
        </li>
        <li className='nav-item'>
            <a href='#resume' onClick={() => handlePageChange('Resume')} 
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}> Resume </a>
        </li>
    </ul>
  );

}