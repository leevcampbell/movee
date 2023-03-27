import React from 'react'

function CommentCard({movie}) {


  return (
    <div>
        <h1>{movie.title}</h1>

        <ul>{movie.comment}</ul>


    </div>
  )
}

export default CommentCard