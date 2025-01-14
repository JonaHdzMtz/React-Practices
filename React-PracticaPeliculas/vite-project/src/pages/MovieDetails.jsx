import React from 'react'
import { useParams } from 'react-router-dom';
import get from '../data/httpClient';
import { useEffect, useState } from 'react';
import GetMovieImg from '../utils/getMovieImg';
// useParams es para obtener los parametros de la url
import "../pages/MovieDetails.css"

export default function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [generos, setGeneros] = useState([]);
    const imageUrl = GetMovieImg(movie.poster_path, 300);
    useEffect(() => {
        get(`/movie/${movieId}`)
            .then((data) => {
                setMovie(data);
                setGeneros(data.genres[0])
            })
    }, [movieId]);


    return (
        <div className ="detailsContainer">
            <img className='col movieImage' src={imageUrl} alt={movie.title} />
            <div className='col movieDetails'>
                <p className="title">
                    <strong>Title:  </strong>
                    {movie.title}
                </p>
                <p>
                    <strong>Generos:  </strong>
                    {generos.name}
                </p>
                <p>
                    <strong>Descripción:  </strong>
                    {movie.overview}
                </p>

            </div>
        </div>
    )
}
