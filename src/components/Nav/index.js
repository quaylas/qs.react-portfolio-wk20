import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const tabs = ['about','portfolio','contact','resume'];

    return (
        <nav>
            <ul className='flex-row'>
                {tabs.map((tab) => (
                    <li className='mx-1'
                    key={tab}>
                        <a href={'#' + tab} 
                        onClick={() => props.handlePageChange(tab)}
                        className={props.currentPage === tab ? 'nav-link active' : 'nav-link'}>
                            {capitalizeFirstLetter(tab)}
                            </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;