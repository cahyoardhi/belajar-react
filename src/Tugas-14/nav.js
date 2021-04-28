import {Link} from "react-router-dom"

const Nav = () => {
    return(
        <ul>
            <Link to="/">UserInfo</Link>
            <Link to="/tabel">Tabel</Link>
            <Link to="/timer">Timer</Link>
            <Link to="/timerbaru">Timer Baru</Link>
            <Link to="/lists">Lists</Link>
            <Link to="/tabelbaru">Tabel Baru</Link>
            <Link to="/example">Example</Link>
            <Link to="/listhook">List Hook</Link>
            <Link to="/tabelhook">Tabel Hook</Link>
            <Link to="/movie">Movie</Link>
            <Link to="/tabelcontext">TabelContext</Link>
        </ul>
    )
}

export default Nav