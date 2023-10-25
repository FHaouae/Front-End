import React from 'react';
import { Route, Routes } from 'react-router'
import FilmList from '../pages/FilmList';
import FilmDetail from '../pages/FilmDetail';



const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" exact element={<FilmList></FilmList>} />
            <Route path="/films/:id" element={<FilmDetail></FilmDetail>} />
        </Routes>
    );
};

export default MainRoutes;
