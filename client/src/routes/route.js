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
import FindEmploye from "../components/find-employee/FindEmploye";
import Sidebar from "../components/sidebar/Sidebar";
import  { JobSeekerDashboard, AdminDashboard, EmployeeDashboard } from "../components/main/Main";
import AdminBlog from "../components/admin/blog/AdminBlog";
import JobSeekerProfile from "../components/JobSeeker/profile/JobSeekerProfile";

const RouteA = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/jobseeker-dashboard" element={<JobSeekerDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/verifyotp" element={<VerifyOTP />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/find-job" element={ <div className="px-32"><FindJob /></div> } />
        <Route path="/find-employee" element={ <div className="px-32"><FindEmploye /></div> } />

        <Route path="/profile" element={ <div className="px-32"><JobSeekerProfile /></div> } />

        

        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/blog" element={<AdminBlog />} />
      </Routes>
    </div>
  );
};


export  {RouteA};
