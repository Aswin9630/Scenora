import Header from '../components/Header'
import MainContainer from '../components/MainContainer'
import SecondaryContainer from '../components/SecondaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {
 useNowPlayingMovies()

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