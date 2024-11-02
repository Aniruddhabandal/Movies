import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';

const MovieDetails = () => {
    const { id } = useParams(); // Get movie ID from URL
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        // Simulate fetching movie details from an API or data source
        const fetchMovieDetails = () => {
            const movieData = {
                1: {
                    title: 'Venom: Let There Be Carnage',
                    description: 'Eddie Brock struggles to coexist with Venom, a deadly alien symbiote.',
                    releaseDate: '2021-09-24',
                    cast: ['Tom Hardy', 'Michelle Williams', 'Woody Harrelson'],
                    image: 'link-to-image',
                },
                2: {
                    title: 'Red Notice',
                    description: 'An Interpol agent tracks down the world’s most wanted art thief.',
                    releaseDate: '2021-11-12',
                    cast: ['Dwayne Johnson', 'Gal Gadot', 'Ryan Reynolds'],
                    image: 'link-to-image',
                },
                // Add more movie details here as needed
            };
            
            setMovie(movieData[id]);
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <Container className="mt-4">
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={movie.image} alt={movie.title} />
                    </Card>
                </Col>
                <Col md={8}>
                    <h2>{movie.title}</h2>
                    <p><strong>Description:</strong> {movie.description}</p>
                    <p><strong>Release Date:</strong> {movie.releaseDate}</p>
                    <p><strong>Cast:</strong> {movie.cast.join(', ')}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default MovieDetails;
