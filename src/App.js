import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import './App.css'

import PopularMovies from './components/PopularMovies';
import TopRatedMovies from './components/TopRatedMovies';
import UpcomingMovies from './components/UpcomingMovies';
import CardGrid from './components/CardGrid';
import MovieDetails from './components/MoviesDetails';




const App = () => {
 
  return (
    <div className='bg-dark'>
    
      {/* <CardGrid movies={movies} />
      <TopRatedMovies/>
      <UpcomingMovies/>
      <PopularMovies/>  */}
      <Router>
      
            <Navbar/>
           
                <Routes>
                  <Route path='/' element={<CardGrid/>}/>
                  <Route path='/popular' element={<PopularMovies/>}/>
                  <Route path='/toprated' element={<TopRatedMovies/>}/>
                  <Route path='/upcomingmovies' element={<UpcomingMovies/>}/>
                  <Route path='/movies/:id' element={MovieDetails}/>
                    
                    </Routes>
        
        </Router>
    </div>
  )
}

export default App
