import React from 'react';


export default function Navigation({ currentPage, handlePageChange }) {

return(
    <ul className='nav-tabs'>
        <li className='nav-item'>
            <a href='#about' onClick={() => handlePageChange('About')} 
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}> ABOUT </a>
        </li>
        <li className='nav-item'>
            <a href='#porfolio' onClick={() => handlePageChange('Portfolio')} 
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}> PORTFOLIO </a>
        </li>
        <li className='nav-item'>
            <a href='#contact' onClick={() => handlePageChange('Contact')} 
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}> CONTACT </a>
        </li>
        <li className='nav-item'>
            <a href='#resume' onClick={() => handlePageChange('Resume')} 
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}> RESUME </a>
        </li>
    </ul>
    
  );

}