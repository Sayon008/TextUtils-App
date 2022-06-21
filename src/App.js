// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import ReactDOM from "react-dom/client";
import React,{ useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";

function App() {
  
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = ()=> {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has eneabled","success");
      document.title = 'Dark Mode Enabled';
      // setInterval( ()=> {
      //   document.title = 'TextUtils is blinking';
      // },2000);
      // setInterval( ()=> {
      //   document.title = 'TextUtils is Dark Mode';
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has eneabled","success");
      document.title = 'Light Mode Enabled';
    }
  }

  return (
    <>
    {/* <Router> */}
      <div>
        <Navbar title="TextUTils" mode={mode} toggleMode={toggleMode}/>
        {alert != null && <Alert alert={alert}/>}
        <div className="container my-3">

        {/* <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>} />
          <Route exact path="about" element={<About />} />
        </Routes> */}

          <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>
          {/* <About/> */}
        </div>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
