

function MovieCard({movie}){
    return(
        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <button>fav</button>
            </div>
            <div>
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}
export default MovieCard