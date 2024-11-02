import React, {  useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PopularMovies = () => {

    const [movies] = useState([
        { id: 1, title: 'Venom: Let There Be Carnage', popularity: 80, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoF3X2nnKRbpMhQwowr7NA5fskv3vradUhgg&s' },
        { id: 2, title: 'Red Notice', popularity: 90, image: 'https://m.media-amazon.com/images/M/MV5BOGNjNGQ3MmItYTM5NS00NjBiLWI0ZTItZDE5ZjQyNjg3ODBjXkEyXkFqcGc@._V1_.jpg' },
        { id: 3, title: 'Clifford the Big Red Dog', popularity: 70, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXifZtgzSVUIq4noYwXhIUgpomWYxIMQDqQ&s' },
        { id: 4, title: 'Shang-Chi and the Legend of the Ten Rings', popularity: 95, image: 'https://m.media-amazon.com/images/M/MV5BZmY5MDcyNzAtYzg3MC00MGNlLTg3OGItNmRjYThkZGVlNzAyXkEyXkFqcGc@._V1_.jpg' },
        { id: 5, title: 'Dune: Part Two', popularity: 85, image: 'https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg' },
        { id: 6, title: 'The Dark Knight', popularity: 100, image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg' },
        { id: 7, title: 'Inception', popularity: 98, image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg' },
        { id: 8, title: 'Avatar 3', popularity: 89, image: 'https://m.media-amazon.com/images/M/MV5BYjE0OWZmYWMtZjBhMi00YzM5LTkzOTctOTZhMTIwNDcxY2U0XkEyXkFqcGc@._V1_.jpg' },
    ]);

    // Sort movies by popularity in descending order
    const sortedMovies = [...movies].sort((a, b) => b.popularity - a.popularity);

    return (
        <div className='bg-dark'>
        <Container className="mt-4">
            <h2 className="text-center mb-4 text-white">Popular Movies</h2>
            <Row>
                {sortedMovies.map((movie) => (
                    <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}></Link>
                        <Card style={{ height: '100%' }}>
                            <Card.Img variant="top" src={movie.image} alt={movie.title} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>Popularity: {movie.popularity}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </div>
    );
};

export default PopularMovies;
