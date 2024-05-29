import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../image/signupin/Feedback.svg";
const Signup = () => {
  return (
    <div className=" bg-[#a4e8f9]">
      <div className="text-center">
        <h1 className="text-4xl font-semibold pt-5">Get Started</h1>
        <h2 className="pt-2 mb-2">
          In Our Website you can Sign Up either as an Employer or a Jobseeker
        </h2>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="mx-auto flex items-center max-md:hidden">
          <img src={img1} alt="" />
        </div>

        <div className="bg-[#eff4f5] p-3 rounded-xl">
          <h1 className="text-3xl font-semibold">Jobseeker Sign Up</h1>
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab btn btn-accent text-black"
              aria-label="I want to hire"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-0"
            >
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered rounded-2xl"
                    required
                  />
                </div>
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
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                   

                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered rounded-2xl"
                    required
                  />
                </div>
                <div className="form-control">
                    <label className="label">
                      <span className="label-text"> Confirm Password</span>
                    </label>
                  

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
                  <p className="label-text">Remember for 30 days</p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div>
                  <p>
                    Already have an account?{" "}
                    <Link to="/login " className="text-red-500">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab btn btn-accent text-black"
              aria-label="I want to a job"
              checked
            />

            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
             <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered rounded-2xl"
                    required
                  />
                </div>
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
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                   

                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered rounded-2xl"
                    required
                  />
                </div>
                <div className="form-control">
                    <label className="label">
                      <span className="label-text"> Confirm Password</span>
                    </label>
                  

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
                  <p className="label-text">Remember for 30 days</p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div>
                  <p>
                    Already have an account?{" "}
                    <Link to="/login " className="text-red-500">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
