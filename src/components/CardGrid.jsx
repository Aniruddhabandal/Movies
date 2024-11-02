import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const CardGrid = ({ movies }) => {
    return (
        <div className='bg-dark'>
        <Container className="mt-4">
        <h2 className="text-center mb-4 text-white">Movies List</h2>
            <Row>
                {movies && movies.map((movie) => (
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

export default CardGrid;
