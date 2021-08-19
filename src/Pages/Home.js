import React from 'react';

// IMPORT THE API URLS
import api_requests from "../Utils/dataService"

//IMPORT COMPONENTS
import MovieList from '../Components/MovieList';
import Header from '../Components/Header';
import SearchMovies from '../Components/SearchMovies';
import Footer from '../Components/Footer';

const Home = () => {

    return (
        <>
            <Header/>
            <SearchMovies title="Search" apiUrl={api_requests.fetchSearchedMovies}/>
            <MovieList title="Latest Trailers" apiUrl={api_requests.fetchUpcomingMovies}/>
            <MovieList title="Popular" apiUrl={api_requests.fetchPopularMovies}/>
            <MovieList title="Trending" apiUrl={api_requests.fetchTrendingMovies}/>
            <Footer/>
        </>
    )
}

export default Home