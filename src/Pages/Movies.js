import React from 'react';

// IMPORT THE API URLS
import api_requests from "../Utils/dataService"

//IMPORT COMPONENTS

import Header from '../Components/Header';
import SearchMovies from '../Components/SearchMovies';
import MovieList from '../Components/MovieList';
import Footer from '../Components/Footer';

const Movies = () => {

    return (
        <>
            <Header/>
            <SearchMovies title="Search" apiUrl={api_requests.fetchSearchedMovies}/>
            <MovieList title="Popular" apiUrl={api_requests.fetchPopularMovies}/>
            <MovieList title="Coming out soon" apiUrl={api_requests.fetchUpcomingMovies}/>
            <MovieList title="Top Reviewed" apiUrl={api_requests.fetchTopReviewedMovies}/>
            <Footer/>
        </>
    )
}

export default Movies