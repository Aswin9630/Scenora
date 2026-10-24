import React from 'react'
import { TMDP_POSTER_IMG_URL } from '../utils/constants'

const MovieCard = ({movie,posterPath}) => {
    console.log("posterPath",posterPath)

  return (
    <>
   <div className='w-36 mx-2'>
        <img src={TMDP_POSTER_IMG_URL + posterPath} alt="movie-card-image"className='rounded-2xl'/>
    </div>
    </>
  )
}

export default MovieCard