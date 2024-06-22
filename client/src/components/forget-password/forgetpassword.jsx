import React from "react";
import img1 from "../../image/signupin/Login.svg";
import { Link } from "react-router-dom";
const Forgetpassword = () => {
  return (
    <div className="grid md:grid-cols-2 bg-[#a4e8f9]">
      <div className="mx-auto flex items-center max-md:hidden">
        <img src={img1} alt="" />
      </div>
      <div className="bg-[#eff4f5] p-3 rounded-xl">
        <h1 className="text-3xl font-semibold">Forgot Password</h1>
        <h2>
          Enter your Email Address, we will send you the reset Password Link{" "}
        </h2>
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

          <Link>
            <button type="submit" className="btn btn-accent">
              Send
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Forgetpassword;
