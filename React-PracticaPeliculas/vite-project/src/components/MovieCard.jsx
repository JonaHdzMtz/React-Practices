import React from 'react'
import styles from "../components/MovieCard.module.css";
import { Link } from 'react-router-dom';
export default function MovieCard({ movie }) {
    const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

    return (
        <li className={styles.movieCard}>
            <Link to={`/movies/${movie.id}`}>
            <img 
            className="MovieImage" 
            width={230}
                height={345}
                src={imageUrl}
                alt={movie.title} />
            
            </Link>
            <div className={styles.title}>
                {movie.title}
            </div>
        </li>
    )
}
