import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import api from '../services/api';

const FilmList = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        api.get('/films')
            .then(response => {
                setFilms(response.data);
            })
            .catch(error => {
                console.error('Error fetching films:', error);
            });
    }, []);

    return (
        <Container className="mt-5">
            <h1 className="mb-4">Liste des Films</h1>
            <Row>
                {films.map(film => (
                    <Col key={film._id} md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{film.titre}</Card.Title>
                                <a href={`/films/${film._id}`} className="btn btn-primary">
                                    Voir le détail
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default FilmList;
