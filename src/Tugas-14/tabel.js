import { useContext } from 'react'
import {TabelProvider} from './tabelContext'
import TabelData from './tabelData'
import TabelForm from './tabelForm'
// import {ThemeContext} from './themeContext'

const Tabel = () => {
    // const [theme, setTheme] = useContext(ThemeContext)
    // const changeTheme = () => {setTheme(theme === "dark" ? "light" : "dark")}
    return (
        <>
        {/* <button onClick={changeTheme}>Change Navbar {theme === "dark" ? "light" : "dark"}</button> */}
        <TabelProvider>
            <TabelData/>
            <TabelForm/>
        </TabelProvider>
        </>
    )
}

export default Tabel