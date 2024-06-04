import React from "react";
import { useForm } from "react-hook-form";

const Postblog = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        // reset,
      } = useForm();
    
      const onSubmit = async (data) => {
        console.log(data);
      }
  return (
    <div>
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className=" font-semibold">Blog Headline</span>
          </label>
          <input
            type="text"
            placeholder="Answer"
            className="input input-sm input-bordered rounded-2xl"
            {...register("blog_headline", { required: true })}
          />
          {errors.job_title && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className=" font-semibold">Blog Description</span>
          </label>
          <textarea className="textarea textarea-bordered" placeholder="Blog" {...register("blog_description", { required: true })}/>
          {errors.job_title && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <button type="submit" className="btn btn-success mt-3">Create a Blog</button>
      </form>
    </div>
  );
};

export default Postblog;
