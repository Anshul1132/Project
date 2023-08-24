import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import Alert from './components/Alert';
// import About from './components/About'

//import {
//  BrowserRouter as Router,
//  Routes,
//  Route,
 // 
// } from "react-router-dom";

// import About from './components/About';
function App () {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
   setTimeout(() => {
    setAlert(null);
   }, 1500);  
  }

 const toggleMode = () =>{
  if( mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor ='#042743';
  showAlert("Dark mode has been enabled", "success");
  document.title = 'TextUtils - Dark Mode';
 // setInterval(() => {          //  popup messages
  //  document.title = 'TextUtils is Amazing mode';
 // }, 2000);
 // setInterval(() => {
 //   document.title = 'Install TextUtils now'
 // }, 1500);
 } 

 else{
  setMode('light');
  document.body.style.backgroundColor ='white';
  showAlert("Light mode has been enabled", "success");
  document.title = 'TextUtils - Light Mode';
 }
 }
return(
  <>

{/* <Navbar title="TextUtils" aboutText ="About"/> */}
{/*<Navbar/>*/}
   {/*  <Router>*/}
<Navbar title= "TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
<Alert alert = {alert}/>
<div className="container my-3">
   {/*  <Routes>*/}
  {/* /users  - - > Component1
  /users/home - - > Component2 */}
         {/*  <Route exact path="/about" element={<About/>}/>   */}
          {/*    <Route exact path="/" element= {} /> */}
          <Textforms showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>
         {/*   </Routes>*/}
       </div>
        {/*   </Router> */} 
  </>
);
}
export default App;