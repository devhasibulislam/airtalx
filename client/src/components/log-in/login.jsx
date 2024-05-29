/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import img1 from "../../image/signupin/Login.svg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="grid md:grid-cols-2 bg-[#a4e8f9]">
      <div className="mx-auto flex items-center max-md:hidden">
        <img src={img1} alt="" />
      </div>
      <div className="bg-[#eff4f5] p-3 rounded-xl">
        <h1 className="text-3xl font-semibold">Welcome back!</h1>
        <h2>Enter your Credentials to access your account</h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered rounded-2xl"
              required
            />
          </div>
          <div className="form-control">
            <div className="flex justify-between">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="label">
                <Link to="/forgetpassword">
                  <span className="label-text">Forget Password?</span>
                </Link>
              </label>
            </div>

            <input
              type="password"
              placeholder="password"
              className="input input-bordered rounded-2xl"
              required
            />
          </div>
          <div className=" flex gap-1 mt-3">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-error"
            />
            <p className="label-text">Remember me</p>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div>
            <p>
              Don't have an account?{" "}
              <Link to="/signup " className="text-red-500">
                Sign-up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
