import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { LuSun } from "react-icons/lu";
import img1 from "../../image/mainicon.svg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem("theme") : "autumn");

  const handletoggle = (e) => {
      if (e.target.checked) {
          setTheme("synthwave")
      }
      else {
          setTheme("autumn")
      }
  }

  useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme])

  const nav = (
    <>
      <li>
        <Link className="text-xl" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-xl" to="/find-job">
          Find Job
        </Link>
      </li>
      <li>
        <Link className="text-xl" to="/find-employee">
          Find Employee
        </Link>
      </li>
      <li>
        <Link className="text-xl" to="/jobseeker-dashboard">
          JobSeeker
        </Link>
      </li>
      <li>
        <Link className="text-xl" to="/admin-dashboard">
         Admin 
        </Link>
      </li>
      <li>
        <Link className="text-xl" to="/employee-dashboard">
          Employee 
        </Link>
      </li>
    
    </>
  );

  return (
    <div> 
      <div className="navbar bg-slate-300 textw bgw">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleDropdown}
            >
              <TfiMenuAlt className="text-2xl lg:hidden" />
            </div>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {nav}
              </ul>
            )}
          </div>

          <div className="flex items-center">
            <img className="w-[42px] h-[42px]" src={img1} alt="" />
            <h2 className="text-3xl font-semibold">airTalX</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>

        <div className="navbar-end">
          <div className="flex justify-center items-center gap-4">

            <label className="switch">

              {/* <input type="checkbox" defaultChecked /> */}
              <input onChange={handletoggle} type="checkbox" />

              <div className="slider">

                <div className="circle">
                  <LuSun className="text-warning"/>
               

                 
                </div>

              </div>
            </label>

            <Link to="/login">
              <button className="btn btn-info btn-sm">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
