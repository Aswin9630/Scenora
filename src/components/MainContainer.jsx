import React from 'react'
import VideoTitle from './VideoTitle'
import BackgroundVideo from './BackgroundVideo'
import { useSelector } from 'react-redux'

const MainContainer = () => {
const movies = useSelector(store=>store.movies?.nowPlayingMovies);
if(!movies) return;

const {original_title, overview, id}= movies[1]

  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <BackgroundVideo movieId={id}/>
    </div>
  )
}

export default MainContainer