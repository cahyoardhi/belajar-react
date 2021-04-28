import React, {useContext} from 'react'
import {Link} from "react-router-dom"
// import {ThemeContext} from "./ThemeContext"


const Nav = () => {
    // const [theme] = useContext(ThemeContext)

    return(
        // <nav style={{background: theme === "dark" ? "navy" : ""}}>
        <ul>
            <li><Link to="/">UserInfo</Link></li>
            <li><Link to="/tabel">Tabel</Link></li>
            <li><Link to="/timer">Timer</Link></li>
            <li><Link to="/timerbaru">Timer Baru</Link></li>
            <li><Link to="/lists">Lists</Link></li>
            <li><Link to="/tabelbaru">Tabel Baru</Link></li>
            <li><Link to="/example">Example</Link></li>
            <li><Link to="/listhook">List Hook</Link></li>
            <li><Link to="/tabelhook">Tabel Hook</Link></li>
            <li><Link to="/movie">Movie</Link></li>
            <li><Link to="/tabelcontext">TabelContext</Link></li>
        </ul>
        // </nav>
    )
}

export default Nav