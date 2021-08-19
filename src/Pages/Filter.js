import React from 'react';
// IMPORT THE API URLS

//IMPORT COMPONENTS

import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import FilterMovies from '../Components/Filter';

const Filter = () => {

    return (
        <>
            <Nav/>
                <FilterMovies/>
            <Footer/>
        </>
    )
}

export default Filter