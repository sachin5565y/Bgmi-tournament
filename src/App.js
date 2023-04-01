import Play from './component/play/Play';
import Header from './component/header/Header.js'
import About from './component/about/About.js';
import Footer from './component/footer/Footer'
import Navbar from './component/Navbar';
import Login from './component/user/Login';
import Signup from './component/user/Signup';
import Alert from './component/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteState from './component/context/notes/NoteState';
import { useState } from 'react';
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
          <Navbar   />
          <Alert alert={alert} />
          <div className='conatainer'>
            <Routes>
              <Route path='/' element={<Header  showAlert={showAlert}/>}/>
              <Route path='/play' element={<Play/>}/>
              <Route path='/login' element={<Login  showAlert={showAlert}/>}/>
              <Route path='/signup' element={<Signup showAlert={showAlert} />}/>
              <Route path='/about' element={<About/>}/>
            </Routes>
          </div>
         <Footer/>
        </Router>
        </NoteState>
    </>
  );
}

export default App;