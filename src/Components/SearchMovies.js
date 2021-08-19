import React, { useState } from 'react';
import api_baseurl from "../Utils/baseUrl"
import { Link } from 'react-router-dom';
import "../Css/search.scss";
import "../Css/movies.scss";

const SearchMovies = ({ title, apiUrl }) => {

    const image_baseurl = "https://image.tmdb.org/t/p/w500";

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        try {
            const request = await api_baseurl.get(apiUrl+query);
            const data = request.data.results;
            setMovies(data)
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <form className="search__form" onSubmit={searchMovies}>
                <label htmlFor="query"></label>
                <input type="text" name="query" 
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit"> Search </button>
            </form>  
            <div className="category__container">
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
        </>
    );
};

export default SearchMovies;