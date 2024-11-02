import React from 'react'


import { Card, Container, Row, Col } from 'react-bootstrap';

const Cards = ({movies}) => {
  return (
    <div className='bg-dark'>
      {/* <Card style={{ width: '18rem' }} className='bg-dark'>
      <Card.Img variant="top" src="https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg/100px180" />
      <Card.Body>
        <Card.Title className='text-white'>Eternals</Card.Title>
        <Card.Text className='text-white'>
          Rating:7.2
        </Card.Text>
      
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='bg-dark'>
      <Card.Img variant="top" src="https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg/100px180" />
      <Card.Body>
        <Card.Title className='text-white'>Eternals</Card.Title>
        <Card.Text className='text-white'>
          Rating:7.2
        </Card.Text>
      
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='bg-dark'>
      <Card.Img variant="top" src="https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg/100px180" />
      <Card.Body>
        <Card.Title className='text-white'>Eternals</Card.Title>
        <Card.Text className='text-white'>
          Rating:7.2
        </Card.Text>
      
      </Card.Body>
    </Card> */}




        <Container className="mt-4">
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
  )
}

export default Cards
