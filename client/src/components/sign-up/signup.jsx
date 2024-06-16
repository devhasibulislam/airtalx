import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../image/signupin/Feedback.svg";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaUpload } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import ButtonAll from "../button/Button";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import axios from "axios"; // Import axios for making API requests

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
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      // Fetch additional user data from MongoDB backend
      const response = await axios.post(
        "http://localhost:8080/v1/api/userdata",
        data
      );

      console.log(response);

      Swal.fire({
        position: "top",
        icon: "success",
        title: "Employer signed up successfully",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/"); // Redirect to home page after successful signup
      });
    } catch (error) {
      console.error("Error during signup:", error);
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Signup failed",
        text: error.message || "Please try again later",
        showConfirmButton: true,
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { user } = result;

      try {
        await axios.post("http://localhost:8080/v1/api/userdata", {
          name: user.displayName,
          email: user.email,
          password:"12345678",
          image:user.photoURL
           // Add any other user data you need
        });

        // Handle successful login/signup
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Google SignUp successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/"); // Redirect to the desired route after successful login
      } catch (error) {
        console.error("Error checking/creating user in MongoDB:", error);
        Swal.fire({
          position: "top",
          icon: "error",
          title: "Error during Google Login",
          text:
            error.response?.data?.message ||
            error.message ||
            "Please try again later",
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.error("Error during Google login:", error);
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Google Login failed",
        text: error.message || "Please try again later",
        showConfirmButton: true,
      });
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
          <input
            type="file"
            id="file-upload"
            className="hidden"
            {...register("file", { required: true })}
          />

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
    </>
  );

  return (
    <div className="bg-[#cdf1fa] max-w-7xl mx-auto">
      <div className="">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-semibold pt-5">Get Started</h1>
          <h2 className="pt-2 mb-2">
            In Our Website you can Sign Up either as an Employer or a Jobseeker
          </h2>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="mx-auto pt-32 pl-20 flex max-md:hidden">
            <img className="w-[400px] h-[312px]" src={img1} alt="" />
          </div>

          <div className="bg-[#eff4f5]   rounded-2xl max-md:p-4 ">
            <div className="  rounded-xl">
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
                    <div>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="card-body"
                      >
                        {fileCompo}
                      </form>

                      <div className="mx-auto  flex max-lg:flex-col lg:justify-center gap-3 mt-[20px]">
                        <button
                          onClick={handleGoogleLogin}
                          className="btn btn-active btn-ghost"
                        >
                          <FcGoogle /> Sign In with Google
                        </button>
                        <button className="btn btn-active btn-ghost">
                          <BsApple /> Sign In with Apple
                        </button>
                      </div>

                      <div className="mt-[20px] p-3">
                        <p>
                          Already have an account?{" "}
                          <Link to="/login" className="text-red-500">
                            Login
                          </Link>
                        </p>
                      </div>
                    </div>
                  )}
                  {activeTab === 1 && (
                    <div>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="card-body"
                      >
                        {fileCompo}
                      </form>
                      <div className="flex justify-between gap-3 mt-[20px] p-3">
                        <button
                          onClick={handleGoogleLogin}
                          className="btn btn-active btn-ghost"
                        >
                          <FcGoogle /> Sign In with Google
                        </button>
                        <button className="btn btn-active btn-ghost">
                          <BsApple /> Sign In with Apple
                        </button>
                      </div>
                      <div className="mt-[20px] p-3 ">
                        <p className="ml-2">
                          Already have an account?{" "}
                          <Link to="/login" className="text-red-500">
                            Login
                          </Link>
                        </p>
                      </div>
                    </div>
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
