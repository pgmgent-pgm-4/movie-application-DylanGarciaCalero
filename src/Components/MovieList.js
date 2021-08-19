import React, { useState, useEffect } from 'react';
import api_baseurl from '../Utils/baseUrl';
import { Link } from 'react-router-dom';
import "../Css/movies.scss";

const image_baseurl = "https://image.tmdb.org/t/p/w500";

// OUR MOVIE RETRIEVING COMPONENT

function MovieList({ title, apiUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // FETCHING THE DATA
        async function fetchData() {
            try {
                const request = await api_baseurl.get(apiUrl);
                const data = request.data.results;
                setMovies(data);
            } catch(err) {
                console.error(err)
            }
        }
        fetchData()
    }, [apiUrl]);

    return (
        <div className="category__container">
            <h2>{title}</h2>
            <ul className="movie__container">
                {movies.map(movie => (
                    <li key={movie.id} className="movie__container__item">
                        <Link to={`/series/${movie.id}`}>       
                                <img src={image_baseurl + movie.poster_path} alt={movie.name}/>
                                <div className="sneak">
                                    <p>{movie.original_title}</p>
                                    <div>
                                        <p>Release date:</p>
                                        <p>{movie.release_date}</p>
                                    </div>
                                </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MovieList