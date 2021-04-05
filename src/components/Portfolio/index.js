import React, { useState } from 'react';
import Header from '../Header';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Footer from '../Footer';

function Portfolio() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = (currentPage) => {
        switch (currentPage) {
            case 'about':
                return <About />

            case 'contact':
                return <Contact />

            default:
                return <About />
        }
    };

    return (
        <main>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    
            {renderPage(currentPage)}
            
            <Footer></Footer>
        </main>
    );
}

export default Portfolio;