import './App.css';
import { useState } from 'react'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteState from './components/context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import Play from './components/play/Play';
import Footer from './components/footer/Footer'
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  return (
    <>
    <NoteState>
      <Router>
        <Navbar  />
        <Alert alert={alert} />
        <div className='conatainer'>
          <Routes>
            <Route path='/' element={<Home showAlert={showAlert}  ></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/play' element={<Play></Play>}></Route>
            
            <Route path='/login' element={<Login showAlert={showAlert}></Login >}></Route>
            <Route path='/signup' element={<Signup showAlert={showAlert}></Signup >}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </NoteState>

  </>
  );
}

export default App;
