import { useDispatch } from "react-redux";
import {  TMDB_API_OPTIONS, TOP_RATED_MOVIES_URL } from "../utils/constants"
import { useEffect } from "react";
import {  addTopRatedMovies } from "../redux/slices/movieSlice";



const useTopRatedMovies = ()=>{
    const dispatch = useDispatch()
    
    const topRatedMovies = async()=>{
        try {
            const response = await fetch(TOP_RATED_MOVIES_URL,TMDB_API_OPTIONS);
            const data=await response.json();
            dispatch(addTopRatedMovies(data.results))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        topRatedMovies()
    },[])

}

export default useTopRatedMovies;