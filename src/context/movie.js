import {MovieProvider} from "./movieContext"
import MovieList from "./movieList"
import MovieForm from "./movieForm"

const Movie = () => {
    return(
        <MovieProvider>
            <MovieList/>
            <MovieForm/>
        </MovieProvider>

    )
}

export default Movie