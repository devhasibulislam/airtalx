

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../image/signupin/Feedback.svg";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaUpload } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import ButtonAll from "../button/Button";
import { GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Signup = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const onSubmit = async (data) => {
    // const { url, public_id, name, email, password, role, status } = data;
    const {  email, password } = data;
    // const alldata = {
    //   avatar: {
    //     url,
    //     public_id,
    //   },
    //   name,
    //   email,
    //   password,
    //   role,
    //   status,
    // };
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/"); // Redirect to home page after successful signup
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await auth.signInWithPopup(GoogleAuthProvider);
      console.log(result.user);
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  const fileCompo = (
    <>
      <div className="form-control ">
        <label className="label">
          <span className="label-text font-semibold">Name</span>
        </label>
        <input
          type="text"
          placeholder="name"
          className="input input-sm  input-bordered rounded-2xl"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          className="input input-sm  input-bordered rounded-2xl"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-sm  input-bordered rounded-2xl"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Confirm Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-sm  input-bordered rounded-2xl"
          {...register("confirmPassword", { required: true })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Upload-Image</span>
        </label>
        <div className="flex flex-col justify-start ">
          <input type="file" id="file-upload" className="hidden" {...register("file", { required: true })} />

          <label
            htmlFor="file-upload"
            className="file-input-bordered flex justify-start rounded-2xl p-2 px-5 gap-2 cursor-pointer bg-[#CFEBFF]"
          >
            <FaUpload className="text-xl" />
            <span> Click to upload image</span>
          </label>
        </div>
        {errors.file && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div className="flex gap-1 mt-3">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox checkbox-error"
        />
        <p className="label-text">Remember for 30 days</p>
      </div>
      <div className="form-control mt-6">
        <ButtonAll>Sign Up</ButtonAll>
      </div>
      <div className="flex justify-between gap-3 mt-[20px]">
        <button onClick={handleGoogleLogin} className="btn btn-active btn-ghost"><FcGoogle /> Sign In with Google</button>
        <button className="btn btn-active btn-ghost"><BsApple /> Sign In with Apple</button>
      </div>
      <div className="mt-[20px]">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-red-500">
            Login
          </Link>
        </p>
      </div>
    </>
  );

  return (
    <div className="bg-[#cdf1fa]">
      <div className="">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-semibold pt-5">Get Started</h1>
          <h2 className="pt-2 mb-2">
            In Our Website you can Sign Up either as an Employer or a Jobseeker
          </h2>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="mx-auto px-24 py-24 flex max-md:hidden">
            <img className="w-[400px] h-[312px]" src={img1} alt="" />
          </div>

          <div className="bg-[#eff4f5] rounded-2xl">
            <div className="pr-20 rounded-xl">
              <h1 className="text-3xl font-semibold text-center mt-[40px]">
                Jobseeker Sign Up
              </h1>

              <div className="rounded-lg">
                {/* Tabs */}
                <div className="flex justify-center bg-slate-200 w-2/3 mx-auto rounded-xl p-2 mt-[30px]">
                  <button
                    className={`px-4 py-2 ${
                      activeTab === 0 ? "bg-blue-400 text-white" : "bg-gray-200"
                    } rounded-lg focus:outline-none`}
                    onClick={() => handleTabClick(0)}
                  >
                    I Want to Hire
                  </button>
                  <button
                    className={`px-4 py-2 ${
                      activeTab === 1 ? "bg-blue-400 text-white" : "bg-gray-200"
                    } rounded-lg focus:outline-none`}
                    onClick={() => handleTabClick(1)}
                  >
                    I Want a Job
                  </button>
                </div>

                {/* Tab Content */}
                <div className="">
                  {activeTab === 0 && (
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                      {fileCompo}
                    </form>
                  )}
                  {activeTab === 1 && (
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                      {fileCompo}
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
