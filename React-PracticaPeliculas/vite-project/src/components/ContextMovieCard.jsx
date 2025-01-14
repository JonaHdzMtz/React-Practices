import React, { useEffect, useState } from 'react'
import get from '../data/httpClient';
import MovieCard from './MovieCard';
import "../components/ContextMovieCard.css";
export default function ContextMovieCard() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie").then((data) => {
            setMovies(data.results);
            console.log("los datos son: ", data);
        });

    }, []);

    return (<ul className="container">
        {movies.map((item,index) => ( 
            <MovieCard key={index} movie={item} />
        ))}
    </ul>
    )
}
