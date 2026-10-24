import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("mov", movies);
  return (
    <>
      {movies && (
        <div className="py-5 mx-5">
          <h1 className="text-3xl font-bold text-gray-700">{title}</h1>
          <div className="flex overflow-x-scroll scrollbar-none py-3">
            <div className="flex">
                    {movies?.map((movie) => <MovieCard key={movie.id} movie={movie} posterPath={movie?.poster_path} />)}
            </div>
        </div>
        </div>
      )}
    </>
  );
};

export default MovieList;
