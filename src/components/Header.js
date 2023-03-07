// importing React and header styles
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css'
// import { useState, useEffect } from "react";
// import Navigation from './Navigation';


// exporting the Header component function
export default function Header(props) {
// const { currentPage, handlePageChange } = props;

return (
        <header className='header'>
            <div className='container-fluid hero-image'>
                <div className='overflow hero'>
                    <img src={require('./pages/images/pexels-bruno-thethe-1910225.jpg')} alt='Profile' className='hero-img'></img>
                </div>
            </div>
        </header>
    );
}

