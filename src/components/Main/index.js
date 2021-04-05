import React, { useState } from 'react';
import Header from '../Header';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Footer from '../Footer';

function PortfolioContainer() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = (currentPage) => {
        switch (currentPage) {
            case 'about':
                return <About />

            case 'contact':
                return <Contact />

            case 'portfolio':
                return <Portfolio />

            case 'resume':
                return <Resume />
            
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

export default PortfolioContainer;