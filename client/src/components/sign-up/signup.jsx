import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../image/signupin/Feedback.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const SelectRole = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select
      className="select w-full max-w-xs"
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
    >
      <option value="admin">Admin</option>
      <option value="employer">Employer</option>
      <option value="job-seeker">Job-seeker</option>
    </select>
  </>
));
const SelectStatus = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select
      className="select w-full max-w-xs"
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
    >
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  </>
));
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
    reset
  } = useForm();

  const onSubmit = async (data) => {
    const { url, public_id, name, email, password, role, status } = data;
    const alldata = {
      avatar: {
        url,
        public_id
      },
      name,
      email,
      password,
      role,
      status
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
          timer: 1500
        });
       
        reset();
        navigate('/');
      }
    } catch (error) {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Registration failed",
        text: error.response?.data?.description || "Please try again later",
        showConfirmButton: true
      });
      console.log(error);
    }
  };

  return (
    <div className="bg-[#a4e8f9]">
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
          <div className="m-6 rounded-lg">
            {/* Tabs */}
            <div className="flex justify-center">
              <button
                className={`px-4 py-2 ${activeTab === 0 ? "bg-blue-400 text-white" : "bg-gray-200"} rounded-lg focus:outline-none`}
                onClick={() => handleTabClick(0)}
              >
                I Want to Hire
              </button>
              <button
                className={`px-4 py-2 ${activeTab === 1 ? "bg-blue-400 text-white" : "bg-gray-200"} rounded-lg focus:outline-none`}
                onClick={() => handleTabClick(1)}
              >
                I Want a Job
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-4">
              {activeTab === 0 && (
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Url</span>
                    </label>
                    <input
                      type="text"
                      placeholder="url"
                      className="input input-bordered rounded-2xl"
                      {...register("url", { required: true })}
                    />
                    {errors.url && <span className="text-red-500">This field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Public Id</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Public id"
                      className="input input-bordered rounded-2xl"
                      {...register("public_id", { required: true })}
                    />
                    {errors.public_id && <span className="text-red-500">This field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered rounded-2xl"
                      {...register("name", { required: true })}
                    />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                  </div>
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
                    {errors.email && <span className="text-red-500">This field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered rounded-2xl"
                      {...register("password", { required: true })}
                    />
                    {errors.password && <span className="text-red-500">This field is required</span>}
                  </div>
                  <div className="form-control">
                    <SelectRole label="Role" {...register("role")} />
                  </div>
                  <div className="form-control">
                    <SelectStatus label="Status" {...register("status")} />
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
                    <button className="btn btn-primary">Sign Up</button>
                  </div>
                  <div>
                    <p>
                      Already have an account?{" "}
                      <Link to="/login" className="text-red-500">
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
              )}
              {activeTab === 1 && (
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Url</span>
                    </label>
                    <input
                      type="text"
                      placeholder="url"
                      className="input input-bordered rounded-2xl"
                      {...register("url", { required: true })}
                    />
                    {errors.url && <span className="text-red-500">This field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Public Id</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Public id"
                      className="input input-bordered rounded-2xl"
                      {...register("public_id", { required: true })}
                    />
                    {errors.public_id && <span className="text-red-500">This field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered rounded-2xl"
                      {...register("name", { required: true })}
                    />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                  </div>
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
                    {errors.email && <span className="text-red-500">This field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered rounded-2xl"
                      {...register("password", { required: true })}
                    />
                    {errors.password && <span className="text-red-500">This field is required</span>}
                  </div>
                  <div className="form-control">
                    <SelectRole label="Role" {...register("role")} />
                  </div>
                  <div className="form-control">
                    <SelectStatus label="Status" {...register("status")} />
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
                    <button className="btn btn-primary">Sign Up</button>
                  </div>
                  <div>
                    <p>
                      Already have an account?{" "}
                      <Link to="/login" className="text-red-500">
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
