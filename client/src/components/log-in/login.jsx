import React, { useState } from "react";
import img1 from "../../image/signupin/Login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ButtonAll from "../button/Button";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      navigate("/"); // Redirect to the desired route after successful login
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Login failed",
        text: error.message || "Please try again later",
        showConfirmButton: true,
      });
    }
  };

  const handleGoogleLogin = async () => {
    if (isPopupOpen) return; // Prevent multiple popups

    setIsPopupOpen(true); // Set popup state to true

    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google Login Success:", result.user);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Google Login successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/"); // Redirect to the desired route after successful login
    } catch (error) {
      console.error("Error during Google login:", error);
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Google Login failed",
        text: error.message || "Please try again later",
        showConfirmButton: true,
      });
    } finally {
      setIsPopupOpen(false); // Reset popup state
    }
  };

  return (
    <div className="grid max-w-7xl mx-auto md:grid-cols-2 bg-[#cdf1fa]">
      <div className="mx-auto flex items-center pl-20 max-md:hidden">
        <img src={img1} alt="Login illustration" />
      </div>
      <div className="bg-white max-w-[680px] max-h-[660px] textw grid sm:grid-cols-3 p-4 rounded-2xl">
        <div className="pl-3 col-span-2 rounded-xl">
          <h1 className="text-3xl font-semibold text-start">Welcome back!</h1>
          <h2 className="text-start mt-2">Enter your credentials to access your account</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-sm input-bordered rounded-2xl"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
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
                placeholder="Password"
                className="input input-sm input-bordered rounded-2xl"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>
            <div className="flex gap-1 mt-3">
              <input type="checkbox" defaultChecked className="checkbox checkbox-error" />
              <p className="label-text">Remember me</p>
            </div>
            <div className="form-control mt-6">
              <ButtonAll type="submit">Login</ButtonAll>
            </div>
          </form>
          <div className="mx-auto flex max-lg:flex-col lg:justify-center gap-3 mt-[20px]">
            <button onClick={handleGoogleLogin} className="btn btn-active btn-ghost mt-3" disabled={isPopupOpen}>
              <FcGoogle /> Sign In with Google
            </button>
          </div>
          <div className="mt-5">
            <p>Don't have an account? <Link to="/signup" className="text-red-500">Sign-up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
