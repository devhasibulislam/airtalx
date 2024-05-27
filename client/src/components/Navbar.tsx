/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-slate-300">
        <div className="flex-1">
          <a className="btn btn-ghost font-bold text-2xl">airTalX</a>
          <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Find Job</Link></li>
          <li><Link to="/contact">Find Employee</Link></li>
        </ul>
        </div>
        <div className="flex justify-center items-center gap-4">

          
          <input type="checkbox" className="toggle toggle-warning" checked />

          <button className="btn btn-info btn-sm">Login</button>
          <button className="btn btn-accent btn-sm">Sign-up</button>

          

          {/* <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div> */}
        </div>
      </div>
    );
};

export default Navbar;