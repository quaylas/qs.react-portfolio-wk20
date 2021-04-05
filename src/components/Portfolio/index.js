import React, { useState } from 'react';
import Header from '../Header';
import About from '../pages/About';
import Contact from '../pages/Contact';

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
            <div>
                {renderPage(currentPage)}
            </div>
        </main>
    );
}

export default Portfolio;