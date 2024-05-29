/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-300">
      <div className="flex-1">
        <a className="btn btn-ghost font-bold text-2xl">airTalX</a>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Find Job</Link>
          </li>
          <li>
            <Link to="/contact">Find Employee</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-4">
        <input type="checkbox" className="toggle toggle-warning" checked />
        <Link to="/login">
          <button className="btn btn-info btn-sm">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-accent btn-sm">Sign-up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
