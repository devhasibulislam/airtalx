import React from "react";
import img1 from "../../image/signupin/Login.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Forgetpassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function handleForgetPassword(data) {
    axios
      .post(`http://localhost:8080/v1/api/auth/reset`, data)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("Check your email");
        } else {
          alert("Invalid OTP");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    try {
    } catch (error) {
      console.error(error);
    }
  }

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
        <form
          className="card-body"
          onSubmit={handleSubmit(handleForgetPassword)}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered rounded-2xl"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>

          <button type="submit" className="btn btn-accent">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgetpassword;
