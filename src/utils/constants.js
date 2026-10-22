export const PHOTO_URL="https://lh3.googleusercontent.com/ogw/AF2bZygvRHY5Oan_t7wPWY2X5dyP-fRqMYGISWZU3lhCQxNUrsU=s64-c-mo"

export const TMDB_API_OPTIONS = {
  method: 'GET',
  headers: {accept: 'application/json', Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`}
};

export const NOWPLAYING_MOVIES_URL="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
export const TRAILER_VIDEO_URL='https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US'