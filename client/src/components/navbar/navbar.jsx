import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";

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
                  <svg
                    className="cross"
                    xmlSpace="preserve"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    viewBox="0 0 365.696 365.696"
                    y="0"
                    x="0"
                    height="6"
                    width="6"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        data-original="#000000"
                        fill="currentColor"
                        d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
                      ></path>
                    </g>
                  </svg>
                  <svg
                    className="checkmark"
                    xmlSpace="preserve"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    viewBox="0 0 24 24"
                    y="0"
                    x="0"
                    height="10"
                    width="10"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        className=""
                        data-original="#000000"
                        fill="currentColor"
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      ></path>
                    </g>
                  </svg>
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
