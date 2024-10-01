import React from 'react';


import About from './About';
import Home from './Home';
import Contact from './Contact';
import Project from './project';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
function App() {
  return (
    <BrowserRouter>
     <Header />
    <Routes>
     
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/Project" element={<Project />}/>
      <Route path="/contact" element={<Contact  />}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
