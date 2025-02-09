

function MovieCard(movie){
    return(
        <div>
            <div>
                <img src={movie.url} alt={movie.title} />
                <button>save</button>
            </div>
            <div>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}
export default MovieCard