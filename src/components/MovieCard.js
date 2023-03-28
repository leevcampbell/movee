import React from 'react'
import { useState } from 'react'

function MovieCard({movie}) {

  const [isFlipped, setIsFlipped] = useState(false)

  

  function handleClick() {
    setIsFlipped(!isFlipped)
    console.log("clicked")
  }


    

  return (
    <div className='movie-cards' onClick = {handleClick}>
      { 
      isFlipped
      ?
        <div className='back-card'>
          <h3>{movie.title}</h3>
          <p>{movie.director}</p>
          <p>{movie.actors}</p>
          <p>{movie.genre}</p>
          <p>Rating: {movie.rating}</p>
          <p>{movie.description}</p>
          <p>{movie.comment}</p>
          
        </div>
      :
        <img onClick={handleClick} className= "movie-images" src={movie.image} alt={movie.title} />
      }
        
    </div>
  )
}

export default MovieCard