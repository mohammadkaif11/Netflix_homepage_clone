const APIKEY="3363fdddd5db7fbd2216f0e4ee6cc168"

const data={
      fetchTrending:`/trending/all/week?api_key=${APIKEY}&language=en-US`,    
      fectchNetflixOriginal:`/discover/tv?api_key=${APIKEY}&with_network213`,
      fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
      fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
      fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
      fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
      fetchRomanceMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
      fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`
}
export default data;