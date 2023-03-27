import React from 'react'

function MovieContainer() {

    fetch('https://api.themoviedb.org/3/movie/550?api_key=b921e1a6aac6cfbbb089957d2e967770')
    .then(response => response.json())
    .then(data => console.log(data))



  return (
    <div className='movie-container'>
        <h3 className='mid-header'>Movies</h3>
    </div>
  )
}

export default MovieContainer