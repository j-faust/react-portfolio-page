import React, { useState } from "react";
import Navigation from "./Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from "./Header";
import Footer from "./Footer";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if(currentPage === 'Home') {
            return <Home />;
        }
        if(currentPage === 'About') {
            return <About />;
        }
        if(currentPage === 'Contact') {
            return <Contact />;
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if(currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}