

import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from "./Home"
import Aboutus from './components/Aboutus/Aboutus';
import Brandkit from './components/Brandkit/Brandkit.js'
import Career from './components/Career/Career.js'
import Error404 from './components/Error404/Error404.js'

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/about' element={<Aboutus/>} />
      <Route path='/brandkit' element={<Brandkit/>} />
      <Route path='/careers' element={<Career/>} />
      <Route path='*' element={<Error404/>} />
    </Routes>
    </Router>
    //<Home/>    
    
  );
}

export default App;
