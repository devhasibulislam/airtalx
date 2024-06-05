import React from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Postblog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  const blogDescription = watch("blog_description", "");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="font-semibold">Blog Headline</span>
          </label>
          <input
            type="text"
            placeholder="Blog Headline"
            className="input input-sm input-bordered rounded-2xl"
            {...register("blog_headline", { required: true })}
          />
          {errors.blog_headline && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="font-semibold">Blog Description</span>
          </label>
          <ReactQuill
            value={blogDescription}
            onChange={(value) => setValue("blog_description", value)}
            modules={{
              toolbar: [
                [{ 'header': '1'}, { 'header': '2'}, { 'font': [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, 
                 { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image', 'video'],
                ['clean']
              ],
            }}
            className="rounded-2xl "
            style={{ height: "100px" }}
          />
          {errors.blog_description && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <button type="submit" className="btn btn-success mt-9">
          Create a Blog
        </button>
      </form>
    </div>
  );
};

export default Postblog;
