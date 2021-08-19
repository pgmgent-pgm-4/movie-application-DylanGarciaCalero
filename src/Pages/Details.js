import React from 'react';
import Review from '../Components/Review';

//IMPORT COMPONENTS
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import MovieDetail from '../Components/MovieDetails';
import { useParams } from 'react-router';

const Details = (props) => {
    let { id } = useParams();
    return (
        <>
            <Nav/>
                <MovieDetail id={id}/>
                <Review id={id}/>
            <Footer/>
        </>
    )
}

export default Details