import { useEffect, useState } from "react";

import './App.css';
import Movie from "./Movie";
import SearchIcon from './search.svg';

const API_KEY = 'fa777268';
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchString, setSearchString] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Uncharted');
        console.log('Movies', movies);
    }, []);

    return (
        <div className="app">
            <h1>KasiMovies</h1>

            <div className="search">
                <input
                    type="text"
                    placeholder="Search for movies"
                    value={searchString}
                    onChange={(ev) => setSearchString(ev.target.value)} />
                <img
                    src={SearchIcon}
                    alt="Search Icon"
                    onClick={() => searchMovies(searchString)} />
            </div>

            {
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie, index) =>
                            <Movie
                                key={index}
                                Year={movie.Year}
                                Poster={movie.Poster}
                                Type={movie.Type}
                                Title={movie.Title}
                            />
                        )}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found...</h2>
                    </div>
                )
            }
        </div>
    )

}

export default App;