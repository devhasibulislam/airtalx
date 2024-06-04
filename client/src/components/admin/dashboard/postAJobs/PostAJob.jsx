import React from "react";
import { useForm } from "react-hook-form";
const PostAJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className=" font-semibold">Job Title</span>
          </label>
          <input
            type="text"
            placeholder="job title"
            className="input input-sm input-bordered rounded-2xl"
            {...register("job_title", { required: true })}
          />
          {errors.job_title && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="form-control mt-3">
          <label className="label">
            <span className=" font-semibold">Job Headline</span>
          </label>
          <p className="label-text">Write Compelling Headlines</p>
          <input
            type="text"
            placeholder="Answer"
            className="input input-sm input-bordered rounded-2xl"
            {...register("job_headline", { required: true })}
          />
          {errors.job_headline && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-2">
          <div className="form-control mt-3 ">
            <label>Job Type</label>
            <select
              {...register("job_type")}
              className="  rounded-xl p-1 bg-base-100"
            >
              <option value="part time">part time</option>
              <option value="full time">full time</option>
              <option value="hybridge">hybridge</option>
            </select>
            {errors.job_type && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control mt-3">
            <label>Hour per week</label>
            <select
              {...register("hour_per_week")}
              className="rounded-xl p-1 bg-base-100"
            >
              <option value="40">40</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </select>
            {errors.hour_per_week && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <div className="form-control mt-3">
          <label className="label">
            <span className=" font-semibold">Salary</span>
          </label>
          <p className="label-text">
            How much (US Dollar) do you want to pay per Hour? the salary range
            is between $3.00 and $99.00
          </p>
          <input
            type="text"
            placeholder="Answer"
            className="input input-sm input-bordered rounded-2xl"
            {...register("job_headline", { required: true })}
          />
          {errors.job_headline && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="form-control mt-3 ">
          <label>Experience Level</label>
          <select
            {...register("experience")}
            className="rounded-xl p-1 bg-base-100"
          >
            <option value="6 month">6 month plus</option>
            <option value="1-2 years">1-2 years</option>
            <option value="2 years plus">2 years plus</option>
          </select>
          {errors.experience && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <button className="btn btn-success mt-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostAJob;
