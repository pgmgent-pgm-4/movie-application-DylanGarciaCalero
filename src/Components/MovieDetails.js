import React, { useState, useEffect } from 'react';
import api_baseurl from "../Utils/baseUrl";
import "../Css/detail.scss";
import Wishlist from './wishlist';

const MovieDetail = ({ id }) => {

    const API_KEY = "d1bcb8d2a4a032769052351a4a5bee58";
    const image_baseurl = "https://image.tmdb.org/t/p/w500";
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    const [production, setProduction] = useState([]);

    useEffect(() => {
        // FETCHING THE DATA
        async function fetchData() {
            try {
                const request = await api_baseurl.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
                const data = request.data;
                const genres = request.data.genres;
                const production = request.data.production_companies;
                setGenres(genres)
                setMovie(data);
                setProduction(production);
            } catch(err) {
                console.error(err)
            }
        }
        fetchData()
    }, [id]);

    return (
        <div className="detail__container">
            <h2>{movie.original_title}</h2>
            <h3>{movie.tagline}</h3>
                <div className="selectedmovie__container">
                    <img src={image_baseurl + movie.poster_path} alt={movie.original_title}/>
                    <div className="selectedmovie__details">
                        <h2>Genres</h2>
                        <ul className="selectedmovie__genres">
                            {genres.map(item => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                        <div className="selectedmovie__synopsis">
                            <h2>Synopsis</h2>
                            <p>{movie.overview}</p>
                        </div>
                        <h2>Producers</h2>
                        <ul className="selectedmovie__production">
                            {production.map((item, index) => (
                                <li key={index}>{item.name}</li>
                            ))}
                        </ul>
                        <div className="selectedmovie__votes">
                            <h2>Votes</h2>
                            <p>Average review: {movie.vote_average}/10  (total reviews: {movie.vote_count})</p>
                            <Wishlist id={id} image={movie.poster_path}/>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default MovieDetail;