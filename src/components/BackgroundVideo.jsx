import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const BackgroundVideo = ({ movieId }) => {
    const trailer = useSelector(store=>store.movies?.trailerVideo);
    useMovieTrailer(movieId)

  return (

    <div className="-mt-24">
  <iframe
    className="w-screen aspect-video"
    src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&rel=0&playsinline=1`}
    title="Movie trailer"
    allow="autoplay; encrypted-media"
  />
</div>
  );
};

export default BackgroundVideo;
