import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS, UPCOMING_MOVIES_URL } from "../utils/constants"
import { useEffect } from "react";
import { addUpcomingMovies } from "../redux/slices/movieSlice";



const useUpComingMovies = ()=>{
    const dispatch = useDispatch()
    
    const upComingMovies = async()=>{
        try {
            const response = await fetch(UPCOMING_MOVIES_URL,TMDB_API_OPTIONS);
            const data=await response.json();
            dispatch(addUpcomingMovies(data.results))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        upComingMovies()
    },[])

}

export default useUpComingMovies;