import React from 'react'
import { useState } from 'react'

function CommentCard({movie}) {

  const [userComment, setUserComment] = useState('')



  function handleSubmit(e) {
    e.preventDefault()
    console.log(userComment)
    fetch(`http://localhost:3000/movies/${movie.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comments: [...movie.comments, userComment]
      })
    })
    .then(response => response.json())
    .then(movie => setUserComment(movie))

    e.target.reset()

  }

  

  function handleChange(e) {
    setUserComment(e.target.value)
  }

  // const mappedComments = comments.map(comment => {
  //   return <li>{comment}</li>})
  
  


  return (


    <div className='menu'>
      
        <h2>{movie.title}</h2>
            <div >
                <img id="images-comment-page" src = {movie.image} alt = {movie.title} />
                <div className='scrollbox'>
                  <ul className='regtext'>
                    {/* <li>{mappedComments}</li> */}
                  </ul>
                </div>
                <form onSubmit = {handleSubmit}>
                  <input type="text" placeholder="Add a comment" onChange={handleChange}  />
                  
                </form>
            </div>
        


    </div>
  )
}


export default CommentCard