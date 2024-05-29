// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";
import Login from "./components/log-in/login";
import Signup from "./components/sign-up/signup";
import Forgetpassword from "./components/forget-password/forgetpassword";
import VerifyOTP from "./components/forget-password/verifyotp";
import About from "./components/about-us/about";
import Contactus from "./components/contact-us/contactus";

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
          <Route path="/verifyotp" element={<VerifyOTP />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contactus />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
