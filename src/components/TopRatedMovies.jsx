import React, {  useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const TopRatedMovies = () => {

    const [movies] = useState([
        { id: 1, title: 'The Lord of the Rings: The Return of the King', rating: '9.1', image: 'https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg' },
        { id: 2, title: 'The Dark Knight', rating: '9.0', image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg' },
        { id: 3, title: 'Shang-Chi and the Legend of the Ten Rings', rating: '7.8', image: 'https://m.media-amazon.com/images/M/MV5BZmY5MDcyNzAtYzg3MC00MGNlLTg3OGItNmRjYThkZGVlNzAyXkEyXkFqcGc@._V1_.jpg' },
    ]);

    return (
        <div className='bg-dark'>
        <Container className="mt-4">
            <h2 className="text-center mb-4 text-white">Top Rated Movies</h2>
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

export default TopRatedMovies;
