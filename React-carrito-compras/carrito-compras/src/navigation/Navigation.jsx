import React from 'react';

import {BrowserRouter as Router, Route, Routes} from  'react-router-dom';
import Login from '../pages/Login.jsx';
import Menu from '../pages/Menu.jsx';

export default function Navigation(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home/:id" element={<Menu/>}/>
            </Routes>
        </Router>
    )
}