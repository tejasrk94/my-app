import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Contact from './components/Contact';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('Dark Mode has been enabled', 'success')
    } else {
      setMode('light');
      showAlert('Light Mode has been enabled', 'primary')
    }
  }
  return (
    <>
        <Navbar title="Logo" aboutText="About Us" contactText="Contact Us" mode={mode} toggleMode={toggleMode} />
        {/* <Alert alert={alert} /> */}
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            <Route exact path="/about" element={<About heading="About Us" />} />
            <Route exact path="/contact" element={<Contact heading="Contact Us"/>}/>
          </Routes>
        </div>
    </>
  );
}

export default App;
