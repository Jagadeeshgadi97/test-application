import React from 'react'
import './index.css'

const API_IMG='https://www.themoviedb.org/t/p/w440_and_h660_face'
const MovieCard = (props) => {
  return (
    <div className='card'>

      <div className="poster">
      <img src={API_IMG+props.poster_path} alt="" />
      </div>

      <div className='info'>
       <p className='title'> {props.title}</p>
        <p className='vote'>{props.vote_average}</p>
      </div>
    </div>
  )
}

export default MovieCard