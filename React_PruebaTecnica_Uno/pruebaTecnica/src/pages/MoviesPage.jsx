import React from 'react'
import Footer from '../components/Footer'
import TopBar from '../components/TopBar'
import Card from '../components/Card'
import sample from "../data/sample.json"
import { useState, useEffect } from 'react'
import "../pages/moviesPage.css"

export default function MoviesPage() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        sample.entries.map((item) => {
            if (item.programType === "movie") {
                setMovies((prev) => [...prev, item])
            }
            console.log(movies.length)
        })
    }, []);

    return (
        <>
        <div className='asdd'>
        <TopBar />
            <div className="containerPage">
                {movies.map((item) => (
                    <>
                        <Card title ={item.title} imgSrc={item.images["Poster Art"].url} />
                    </>

                ))}
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
            
        </>

    )
}
