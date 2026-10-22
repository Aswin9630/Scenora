import { useEffect } from "react";
import { addTrailerVideo } from "../redux/slices/movieSlice";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId)=>{
      const dispatch = useDispatch()

      const trailerVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        TMDB_API_OPTIONS,
      );
      const data = await response.json();
      const trailer = data?.results.filter((video) => video.type === "Trailer");
      const video = trailer.length ? trailer[0] : data?.results[0];
      dispatch(addTrailerVideo(video))

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    trailerVideo();
  }, []);
}

export default useMovieTrailer;