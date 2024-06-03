import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../image/signupin/Feedback.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { FaUpload } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

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
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { url, public_id, name, email, password, role, status } = data;
    const alldata = {
      avatar: {
        url,
        public_id,
      },
      name,
      email,
      password,
      role,
      status,
    };
    try {
      const result = await axios.post(
        "http://localhost:8080/v1/api/auth/register",
        alldata
      );
      if (result.data.acknowledgement === true) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: result.data.description || "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });

        reset();
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Registration failed",
        text: error.response?.data?.description || "Please try again later",
        showConfirmButton: true,
      });
      console.log(error);
    }
  };

  const fileCompo = (
    <>
      <div className="form-control">
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
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Upload-Image</span>
        </label>
        <div className="flex flex-col justify-start ">
          <input type="file" id="file-upload" className=" hidden" />

          <label
            htmlFor="file-upload"
            className=" file-input-bordered  flex justify-start rounded-2xl p-2 px-5 gap-2 cursor-pointer bg-blue-300"
          >
            <FaUpload className="text-xl" />
            <span> Click to upload image</span>
          </label>
        </div>
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
        <p className="label-text">Remember for 30 days</p>
      </div>
      <div className="form-control mt-6 ">
        <button className="btn btn-primary">Sign Up</button>
      </div>
      <div className="  flex justify-between gap-3 mt-[20px]">
        <button className="btn btn-active btn-ghost"><FcGoogle/> Sign In with Google</button>
        <button className="btn btn-active btn-ghost"><BsApple/> Sign In with Facebook</button>
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
    <div className="bg-blue-300">
     <div className="">
     <div className="text-center mb-4">
        <h1 className="text-4xl font-semibold pt-5">Get Started</h1>
        <h2 className="pt-2 mb-2">
          In Our Website you can Sign Up either as an Employer or a Jobseeker
        </h2>
      </div>

      <div className="grid md:grid-cols-2">

        <div className="mx-auto px-24 flex items-center max-md:hidden">
          <img src={img1} alt="" />
        </div>

       <div className="bg-[#eff4f5] rounded-2xl">
       <div className="pr-20 rounded-xl">
          <h1 className="text-3xl  font-semibold text-center mt-[40px]">
            Jobseeker Sign Up
          </h1>

          <div className=" rounded-lg">
            {/* Tabs */}
            <div className="flex justify-center  mt-[30px]">
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
