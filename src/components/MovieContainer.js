import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import MovieCard from './MovieCard'

function MovieContainer({search, setSearch}) {
 
  const [movies, setMovies] = useState([])
  console.log(search)

  
 
  useEffect (() => { fetch("http://localhost:3000/movies")
  .then(response => response.json())
  .then(movies => setMovies(movies))
  }, [])

  const filteredMovies = movies.filter(movie => { 
    if (movie.title.toLowerCase().includes(search.toLowerCase())){
      return true 
    } if (movie.director.toLowerCase().includes(search.toLowerCase())) {
      return true
    } if (movie.genre.toLowerCase().includes(search.toLowerCase())) {
      return true
    } if (movie.rating.toString().toLowerCase().includes(search.toLowerCase())){
      return true
    } else {
      return false
    }
   }
  )
   console.log(filteredMovies)


  

    const renderedMovies = filteredMovies.map(movie => {
      return <MovieCard key={movie.id} movie={movie} />}) 

  



  return (
    <div className='movie-container'>
        <h3 className='menu'>Movies</h3>

        <div className='movie-card-container'>
          {renderedMovies}
        </div>

    </div>
  )
}

export default MovieContainer