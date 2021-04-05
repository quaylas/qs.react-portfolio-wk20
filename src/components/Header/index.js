import React from 'react';
import Nav from '../Nav';

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <h1>Quayla Skevington</h1>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} ></Nav>
        </header>
    );
}

export default Header;