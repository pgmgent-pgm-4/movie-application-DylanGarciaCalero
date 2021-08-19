const API_KEY = "d1bcb8d2a4a032769052351a4a5bee58";

const api_requests =  {

    fetchSearchedMovies: `/search/movie?api_key=${API_KEY}&query=`,
    fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}`,
    fetchLatestMovies: `/movie/upcoming?api_key=${API_KEY}`,
    fetchPopularMovies: `/movie/popular?api_key=${API_KEY}`,
    fetchTrendingMovies: `/movie/upcoming?api_key=${API_KEY}`,
    fetchTopReviewedMovies: `/movie/top_rated?api_key=${API_KEY}`,
}

export default api_requests;