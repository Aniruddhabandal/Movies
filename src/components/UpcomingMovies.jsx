import React, {  useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const UpcomingMovies = () => {
  
    const [movies] = useState([
        { id: 1, title: 'Dune: Part Two', rating: 'TBA', image: 'https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg' },
        { id: 2, title: 'Spider-Man: Beyond the Spider-Verse', rating: 'TBA', image: 'https://m.media-amazon.com/images/M/MV5BZGZhMmE5OTYtMjM3Ny00NTVmLTgwZmEtZDY4YmE3MzQwN2ViXkEyXkFqcGc@._V1_.jpg' },
        { id: 3, title: 'Avatar 3', rating: 'TBA', image: 'https://m.media-amazon.com/images/M/MV5BYjE0OWZmYWMtZjBhMi00YzM5LTkzOTctOTZhMTIwNDcxY2U0XkEyXkFqcGc@._V1_.jpg' },
        { id: 4, title: 'Guardians of the Galaxy Vol. 3', rating: 'TBA', image: 'https://m.media-amazon.com/images/M/MV5BOTJhOTMxMmItZmE0Ny00MDc3LWEzOGEtOGFkMzY4MWYyZDQ0XkEyXkFqcGc@._V1_.jpg' },
        { id: 5, title: 'Mission Impossible 8', rating: 'TBA', image: 'https://img.etimg.com/thumb/width-1200,height-1200,imgsize-82848,resizemode-75,msid-110371715/news/international/us/mission-impossible-8-all-you-may-want-to-know-about-release-date-cast-plot-filming-and-more.jpg' },
        { id: 6, title: 'Aquaman and the Lost Kingdom', rating: 'TBA', image: 'https://m.media-amazon.com/images/M/MV5BYjQ1ZTUzMWMtY2VkNS00ZDRjLWEwODYtYmFkMWJiNTQxMDUzXkEyXkFqcGc@._V1_.jpg' },
        { id: 7, title: 'John Wick: Chapter 5', rating: 'TBA', image: 'https://i.ytimg.com/vi/WzRzazHso74/hqdefault.jpg' },
        { id: 8, title: 'Fantastic Beasts 4', rating: 'TBA', image: 'https://images.thedirect.com/media/article_full/fantastic-beasts-4_Fb3UzV0.jpg' },
    ]);

    return (
        <div className='bg-dark'>
        <Container className="mt-4">
            <h2 className="text-center mb-4 text-white">Upcoming Movies</h2>
            <Row>
                {movies.map((movie) => (
                    <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card style={{ height: '100%' }}>
                            <Card.Img variant="top" src={movie.image} alt={movie.title} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>Rating: {movie.rating}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </div>
    );
};

export default UpcomingMovies;
