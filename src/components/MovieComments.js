import React from 'react'
import {useState, useEffect} from 'react'
import CommentCard from './CommentCard'

function MovieComments() {


const [movieComments, setMovieComments] = useState([])

useEffect(() => { 
fetch('http://localhost:3000/movies')
.then(res => res.json())
.then(movies => setMovieComments(movies))
},[])

const displayMovie = movieComments.map(movie => {
    return <CommentCard key={movie.id} movie={movie} />
})

  return (
    <div>
        <div className='menu-option'>
            {displayMovie}
        </div>
    
    
    </div>
  )
}

export default MovieComments