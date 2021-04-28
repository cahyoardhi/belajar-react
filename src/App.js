// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes'
import Nav from './Tugas-14/nav'

function App() {
  return (
    <Router>
      <Nav/>
      <Routes/>
    </Router>
  );
}

export default App;
