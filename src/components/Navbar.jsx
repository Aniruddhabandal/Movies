import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import TopRatedMovies from './TopRatedMovies';
import PopularMovies from './PopularMovies';
import UpcomingMovies from './UpcomingMovies';
import CardGrid from './CardGrid';




const Navbars = () => {
  const movies = [
    { id: 1, title: 'Venom: Let There Be Carnage', rating: '7.2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoF3X2nnKRbpMhQwowr7NA5fskv3vradUhgg&s' },
    { id: 2, title: 'Red Notice', rating: '6.8', image: 'https://m.media-amazon.com/images/M/MV5BOGNjNGQ3MmItYTM5NS00NjBiLWI0ZTItZDE5ZjQyNjg3ODBjXkEyXkFqcGc@._V1_.jpg' },
    { id: 3, title: 'Clifford the Big Red Dog', rating: '7.6', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXifZtgzSVUIq4noYwXhIUgpomWYxIMQDqQ&s' },
    { id: 4, title: 'Shang-Chi and the Legend of the Ten Rings', rating: '7.8', image: 'https://m.media-amazon.com/images/M/MV5BZmY5MDcyNzAtYzg3MC00MGNlLTg3OGItNmRjYThkZGVlNzAyXkEyXkFqcGc@._V1_.jpg' },
    { id: 5, title: 'Eternals', rating: '6.3', image: 'https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg'},
    { id: 6, title: 'League of Super Pets', rating: '7.1', image: 'https://m.media-amazon.com/images/M/MV5BNGRmZmJiNjEtOGFkMC00NmVlLTllMmQtMTc0MTg4ODIyOWQzXkEyXkFqcGc@._V1_.jpg'},
    { id: 7, title: 'The Dark Knight', rating: '9.0', image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg'},
    { id: 8, title: 'The Lord of the Rings: The Return of the King', rating: '9.1', image: 'https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg'},
  ];
  return (
    
    <div>
        <Navbar expand="lg" className="bg-dark ">
      <Container fluid>
        <Navbar.Brand to="/" className='text-white'>MovieDb</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  to='/popular' className='text-white'>Popular</Nav.Link>
            <Nav.Link  to='/toprated' className='text-white'>Top Rated</Nav.Link>
            
            <Nav.Link  to='/upcoming'  className='text-white'>
              Upcoming
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <PopularMovies/>
    <CardGrid movies={movies}/>
    <TopRatedMovies/>
   
    <UpcomingMovies/>
    
    </div>
    
  )
}

export default Navbars
