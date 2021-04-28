import {useContext, useState} from 'react'
import {MovieContext} from "./movieContext"

const MovieForm = () => {
    const [inputData, setInputData] = useState({name: "", lengthOfTime: 0})
    const [movie, setMovie] = useContext(MovieContext)

    const hanndleSubmit = (event) => {
        event.preventDefault()        
        setMovie([...movie, inputData])        
        setInputData({name: "", lengthOfTime:0})
    }

    const handleInput = (event) => {
        let typeOfInput = event.target.name
        // eslint-disable-next-line default-case
        switch (typeOfInput) {
            case "name": {setInputData({...inputData, name: event.target.value});  break;}
            case "time": {setInputData({...inputData, lengthOfTime: event.target.value}); break;}
        }
    }

    return(
        <form onSubmit={hanndleSubmit}>
            <input type="text" name="name" value={inputData.name} onChange={handleInput}/>&nbsp;
            <input type="number" name="time" value={inputData.lengthOfTime} onChange={handleInput}/>            
            <button>submit</button>
        </form>
    )
}

export default MovieForm