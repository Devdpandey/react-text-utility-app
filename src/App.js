
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';
import React, {useState} from 'react'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode]   = useState('light');
  const [alert, setAlert] = useState(null);

  const updateAlert = (message, type) => {
    setAlert({ message : message,
               type:type          
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggle = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#765f5f';
      updateAlert('Dark mode set successfuly','success');
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      updateAlert('White mode set successfuly','success')
    }
  }
  return (
   <>
 <div className="container my-3">
  <Router>
 <Navbar firstItem="Text Utility App " secondItem="About us" color={mode} toggleMode={toggle}/>
 <Alert alert={alert}/>
   <Routes>
    <Route exact path='/' element={<Form alert={updateAlert} title = "Input your text" color = {mode} />}  />
    <Route exact path='/about' element={<About/>} />
  </Routes>
  </Router>
 </div>
   </>
  );
}

export default App;
