import Header from '../components/Header'
import MainContainer from '../components/MainContainer'
import SecondaryContainer from '../components/SecondaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpcomingMovies'

const Browse = () => {
 useNowPlayingMovies()
 usePopularMovies()
 useTopRatedMovies()
 useUpComingMovies()

  return (
    <div>
      <div>
        <Header/>
        <div>
          <MainContainer/>
          <SecondaryContainer/>
        </div>

      </div>
    </div>
  )
}

export default Browse