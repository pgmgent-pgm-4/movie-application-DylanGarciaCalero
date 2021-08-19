import React, { useState, useEffect } from 'react';
import api_baseurl from "../Utils/baseUrl"
import { Link } from 'react-router-dom';
import "../Css/filter.scss"

const FilterMovies = () => {

    const image_baseurl = "https://image.tmdb.org/t/p/w500";
    const API_KEY = "d1bcb8d2a4a032769052351a4a5bee58";

    const [query, setQuery] = useState('');
    const [selectedType, setSelectedType] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        async function getGenres() {
            try {
                const request = await api_baseurl.get(`/genre/${query}/list?api_key=${API_KEY}&language=en-US`);
                const data = request.data.genres;
                setSelectedType(data)
            } catch (err) {
                console.error(err)
            }
        }
        getGenres()
    },[query]);

    const fetchData = async (e) => {
        try {
            e.preventDefault();
            const request = await api_baseurl.get(`/discover/${query}?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=${selectedGenre}`);
            const data = request.data.results
            setFilteredData(data)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <>
            <form className="filter__form" onSubmit={fetchData}>
                <label htmlFor="typeofmovie"></label>
                <select name="typeofmovie" defaultValue={'DEFAULT'} onChange={(e) => setQuery(e.target.value)} id="typeselect">
                    <option value="DEFAULT" disabled>TV or Movie?</option>
                    <option value="movie">movie</option>
                    <option value="tv">tv</option>
                </select>
                <label htmlFor="genre"></label>
                <select name="genre" defaultValue={'DEFAULT'} onChange={(e) => setSelectedGenre(e.target.value)} id="chosengenre">
                    <option value="DEFAULT" disabled>Select your genre</option>
                    {selectedType.map( item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
                <button type="submit">Search!</button>
            </form>
            <ul className="filtered__list">
            <ul className="movie__container">
                {filteredData.map(movie => (
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
            </ul>
        </>
    );
};

export default FilterMovies;