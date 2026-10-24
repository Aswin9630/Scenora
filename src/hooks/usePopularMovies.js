import { useDispatch } from "react-redux";
import {  POPULR_MOVIES_URL, TMDB_API_OPTIONS } from "../utils/constants"
import { useEffect } from "react";
import { addPopularMovies } from "../redux/slices/movieSlice";



const usePopularMovies = ()=>{
    const dispatch = useDispatch()
    
    const popularMovies = async()=>{
        try {
            const response = await fetch(POPULR_MOVIES_URL,TMDB_API_OPTIONS);
            const data=await response.json();
            dispatch(addPopularMovies(data.results))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        popularMovies()
    },[])

}

export default usePopularMovies;