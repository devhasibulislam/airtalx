/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <div className=" text-white bg-[#2792A8]  w-full">
     <div className="max-w-[1280px] mx-auto ">
      <footer className="footer p-10  mx-auto ">
        <nav>
          <h6 className=" text-[12px] font-bold">Services</h6>
          <a className="link link-hover  text-[12px]">
            {" "}
            <Link to="/find-job"> Find Job</Link>
          </a>
          <a className="link link-hover  text-[12px]">
            {" "}
            <Link to="/find-employee"> Find Employee</Link>
          </a>
        </nav>
        <nav>
          <h6 className="text-[12px] font-bold">Company</h6>
          <a className="link link-hover  text-[12px]">
            {" "}
            <Link to="/about-us"> About us</Link>
          </a>
          <a className="link link-hover  text-[12px]">
            {" "}
            <Link to="/contact-us"> Contact us</Link>
          </a>
          <a className="link link-hover  text-[12px]">
            <Link to="/blog"> Blogs</Link>
          </a>
          <a className="link link-hover  text-[12px]">Client Search</a>
        </nav>
        <nav>
          <h6 className=" text-[12px] font-bold">Legal</h6>
          <a className="link link-hover  text-[12px]">
            {" "}
            <Link to="/faq">Terms of use</Link>{" "}
          </a>
          <a className="link link-hover  text-[12px]">
            <Link to="/faq">Privecy and police</Link>
          </a>
          <a className="link link-hover  text-[12px]">
            <Link to="/faq">Help & FAQs</Link>
          </a>
        </nav>
        <nav>
          <h6 className=" text-[12px] font-bold">Pricing</h6>
          <a className="link link-hover  text-[12px]">Free tiar</a>
          <a className="link link-hover  text-[12px]">Proffesional tiar</a>
        </nav>
        <nav>
          <h6 className=" text-[12px] font-bold">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <h2>
              <FaTwitter className="text-2xl" />
            </h2>
            <h2>
              <FaFacebook className="text-2xl" />
            </h2>
            <h2>
              <IoLogoInstagram className="text-2xl" />
            </h2>
            <h2>
              <FaLinkedin className="text-2xl" />
            </h2>
            <h2>
              <IoLogoYoutube className="text-2xl" />
            </h2>
          </div>
        </nav>
      </footer>
      <div className="bg-[#1B405D]">
        <h1 className="text-center text-[12px] text-white p-3">
          Copyright 2024 - All right reserved by airTalX
        </h1>
      </div>
    </div>
   </div>
  );
};

export default Footer;
