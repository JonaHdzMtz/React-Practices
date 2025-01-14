import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import MoviesPage from '../pages/MoviesPage'

export default function Router() {
    return (
        <BrowserRouter >
            <Routes>
                <Route className= "tamano" path="/" element = {<MainPage/>} />
                <Route path = "/movies" element={<MoviesPage/>}/>
            </Routes>
        </BrowserRouter>

    )
}
