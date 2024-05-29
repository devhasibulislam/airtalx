// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <nav className="">
        <Navbar />
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
