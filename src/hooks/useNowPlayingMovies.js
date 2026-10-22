import { useDispatch } from "react-redux";
import { NOWPLAYING_MOVIES_URL, TMDB_API_OPTIONS } from "../utils/constants"
import { addNowPlayingMovies } from "../redux/slices/movieSlice";
import { useEffect } from "react";



const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()
    
    const nowPlayingMovies = async()=>{
        try {
            const response = await fetch(NOWPLAYING_MOVIES_URL,TMDB_API_OPTIONS);
            const data=await response.json();
            dispatch(addNowPlayingMovies(data.results))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        nowPlayingMovies()
    },[])

}

export default useNowPlayingMovies;