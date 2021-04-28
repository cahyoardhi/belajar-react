import {useContext} from 'react'
import {MovieContext} from "./movieContext"

const MovieList = () => {
    const [movie] = useContext(MovieContext)

    return (
        <ul>
            {movie.map((el, index)=> {
                return <li key={index}>name: {el.name} {el.lengthOfTime} minutes</li>
            })}
        </ul>
    )
}

export default MovieList