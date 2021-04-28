// import Home from './Home'
import {Switch, Route} from 'react-router-dom'
import UserInfo from "./UserInfo"
import Tabel from './Tugas-10/tabel'
import Timer from './Timer'
import TimerBaru from './Tugas-11/Jam'
import Lists from './lists'
import TabelBaru from './Tugas-12/tabel'
import Example from './belajarHook'
import List from './list hooks'
import TabelHook from './Tugas-13/tabel'
import Movie from './context/movie'
import TabelContextHook from './Tugas-14/tabel'
import Nav from './nav'
// import {ThemeProvider} from './ThemeContext'


const Routes = () => {
    return (
        <>
        {/* <ThemeProvider> */}
        {/* <Nav/> */}
        <Switch>
            <Route exact path ="/" component={UserInfo}/>
            <Route exact path ="/tabel" component={Tabel}/>
            <Route exact path ="/timer" component={Timer}/>
            <Route exact path ="/timerbaru" component={TimerBaru}/>
            <Route exact path ="/lists" component={Lists}/>
            <Route exact path ="/tabelbaru" component={TabelBaru}/>
            <Route exact path ="/example" component={Example}/>            
            <Route exact path ="/listhook" component={List}/>
            <Route exact path ="/tabelhook" component={TabelHook}/>
            <Route exact path ="/movie" component={Movie}/>
            <Route exact path ="/tabelcontext" component={TabelContextHook}/>
        </Switch>
        {/* </ThemeProvider> */}
        </>
    )
}

export default Routes