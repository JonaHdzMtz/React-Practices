import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RickMortyMainPage from '../RickMortyMainPage';

import React from 'react'

export default function route() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RickMortyMainPage />} />
            </Routes>
        </BrowserRouter>
    )
}


