import {getPopularMovies, searchMovies} from "../services/api"
import {useState,useEffect} from "react"
import MovieCard from "../displayComponents/MovieCard"

function Home(){
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error,setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err){
                console.log(err)
                setError("failed to load movies")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    },[])
    const handleSearch = e => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }
    const onChange = e =>{
        setSearchQuery(e.target.value)
    }
     const mapped = movies.map((movie)=>(
         movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id}/>
    ))
    return(
        <div>
            <form onSubmit={handleSearch}>
                <input 
                type="text"
                placeholder="search for movies"
                value={searchQuery}
                onChange={onChange}
                 />
                 <button type="submit">start search</button>
            </form>
            <div className="moviesGridLable">
                {mapped}
            </div>
        </div>
    )
}
export default Home