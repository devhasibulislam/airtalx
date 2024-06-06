import React from "react";
import img1 from "../../image/signupin/Login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import ButtonAll from "../button/Button";
// import { FcGoogle } from "react-icons/fc";
// import { BsApple } from "react-icons/bs";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await axios.post(
        "http://localhost:8080/v1/api/auth/login",
        data
      );
      // console.log(result);
      if (result.data.acknowledgement === true) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: result.data.description || "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        // Optionally reset form only if the login is successful
        reset();
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Login failed",
        text: error.response?.data?.description || "Please try again later",
        showConfirmButton: true,
      });
      console.log(error);
    }
  };

  return (
    <div className="grid md:grid-cols-2 bg-[#cdf1fa]">
      <div className="mx-auto flex items-center max-md:hidden">
        <img src={img1} alt="" />
      </div>

      <div className="bg-white bgw textw grid grid-cols-3 p-4 rounded-2xl">
        <div className="pl-3 col-span-2 rounded-xl">
          <h1 className="text-3xl font-semibold text-start">Welcome back!</h1>
          <h2 className="text-start mt-2">
            Enter your Credentials to access your account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-sm input-bordered rounded-2xl"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <div className="flex justify-between">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
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
                className="input input-sm input-bordered rounded-2xl"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex gap-1 mt-3">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-error"
              />
              <p className="label-text">Remember me</p>
            </div>
            <div className="form-control mt-6">
              <ButtonAll>Login</ButtonAll>
            {/* <div className="  flex-col gap-3 justify-center gap- mt-[30px]">
              <button className="btn btn-active btn-ghost mb-3">
                <FcGoogle /> Sign In with Google
              </button>
              <button className="btn btn-active btn-ghost">
                <BsApple /> Sign In with Facebook
              </button>
            </div> */}
            </div>
            <div className="mt-5">
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="text-red-500">
                  Sign-up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
