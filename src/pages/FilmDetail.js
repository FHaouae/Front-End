import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const FilmDetail = () => {
    const [film, setFilm] = useState(null);
    const { id } = useParams();

    useEffect(() => {

        api.get(`/films/${id}`)
            .then(response => {
                setFilm(response.data);
            })
            .catch(error => {
                console.error('Error fetching film details:', error);
            });
    }, [id]);

    if (!film) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Détails du Film</h1>
            <h2>{film.titre}</h2>
            <p>Description: {film.description}</p>
            <p>Réalisateur: {film.realisateur}</p>
            <p>Acteurs: {film.acteurs.join(', ')}</p>
        </div>
    );
};

export default FilmDetail;
