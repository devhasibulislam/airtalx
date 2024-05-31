import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/log-in/login";
import Signup from "../components/sign-up/signup";
import Forgetpassword from "../components/forget-password/forgetpassword";
import VerifyOTP from "../components/forget-password/verifyotp";
import About from "../components/about-us/about";
import Contactus from "../components/contact-us/contactus";
import Pricing from "../components/pricing/Pricing";
import FAQ from "../components/FAQ/faq";
import FindJob from "../components/find-job/FindJob";

const RouteA = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/verifyotp" element={<VerifyOTP />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/find-job" element={<FindJob />} />
      </Routes>
    </div>
  );
};

export default RouteA;
