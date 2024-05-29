// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";
import Login from "./components/log-in/login";
import Signup from "./components/sign-up/signup";
import Forgetpassword from "./components/forget-password/forgetpassword";

function App() {
  return (
    <div>
      <nav className="">
        <Navbar />
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
