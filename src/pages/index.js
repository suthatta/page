import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import About from './About';
import Home  from './Home';
import Projects from './Projects';
import NoPage from './NoPage';
//import loading from './loading';
//import logo from './logo.svg';


function App() {
  return (
         <Router>
           <div>
           <Navbar />
           <ScrollToTop />
           </div>
   
        <Routes>      
          <Route path="/about" element={<About /> } />
          <Route path="/project" element={<Projects />} />
          <Route path="/" element={<Home />} /> 
          <Route path="*" element={<NoPage />} /> 
        </Routes>
        <div> 
        <Footer />
        </div>
      
      </Router>
  );
}

export default App;
/*   
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
           </header>
           */