import React from 'react';
// import { useState, useEffect } from "react";
import Navigation from './Navigation';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header(props) {
const { currentPage, handlePageChange } = props;

return (
    <header className='header'>
        <div className='container-fluid hero-image'>
            <div className='row'>

            </div>
        </div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
)

};

