import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/Contact';
import Login from './components/log-in/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Landingpage from './components/page/Landingpage';


function App() {
  return (
    <div>
      <nav className="">
        <Navbar/>
      
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
