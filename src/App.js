import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabaled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

  setTimeout(()=>{
    setAlert(null);
  },1500);

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark mode';

      // setInterval(()=>{
      //   document.title ='TextUtils is Amazing Mode';
      // }, 2000)
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable",'success')
      document.title = 'TextUtils - Light mode';
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>
    <Navbar/> */}
    <Router>

    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    <div className="container my-3">
    <Routes>
{/* 
      /user --> Component 1
      /user/home --> --> Component 2 */}

    <Route exact path='/about' element={<About mode = {mode} />} />

    <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode = {mode}/>} />
          
    </Routes>
    </div>

    </Router>
    </>
  );
}

export default App;
