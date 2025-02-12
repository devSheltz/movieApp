const API_KEY = "cb365dc46d9db5cf8b7e5b243bc13a44"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    const result = data.results
    return result
}

export const searchMovies = async (query) => {
const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`
)
const data = await response.json()
return data.results
}