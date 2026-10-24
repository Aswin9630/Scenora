import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movie=useSelector(store=>store.movies)
  return (
    
    <div>
      <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movie.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movie.topRatedMovies}/>
      <MovieList title={"Upcoming"} movies={movie.upComingMovies}/>
    </div>
  )
}

export default SecondaryContainer