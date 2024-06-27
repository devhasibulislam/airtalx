/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const SingleBlog = () => {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  console.log(blog);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          `https://api-airtalx.vercel.app/v1/api/blogs/${id}`
        );
        setBlog(res.data);
        // setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the jobs!", error);
        Swal.fire({
          title: "Error!",
          text: "There was an error fetching the jobs",
          icon: "error",
          confirmButtonText: "OK",
        });
        // setLoading(false);
      }
    };

    fetchJobs();
  }, []);
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold">{blog.headline}</h2>
      <div className="flex gap-4 items-center mt-2">
        <h2 className="flex gap-2 items-center">
          <FaUserCircle /> <span className="text-blue-500">Admin</span>
        </h2>
        <h2>
          <h3 className="text-[12px]">
            {moment(blog.createdAt).format("MMMM Do YYYY, h:mm a")}
          </h3>
        </h2>
      </div>
      <div className="mt-3 mb-3 prose">
        <h2 dangerouslySetInnerHTML={{ __html: blog.description }} />
      </div>

      <hr className="border border-base-200" />
      <div className="flex gap-3 mb-3 mt-5">
        <h2 className="bg-green-300 flex gap-1 items-center p-2">
          <AiOutlineLike className="text-2xl" /> <span>1</span>
        </h2>
        <h2 className="bg-red-300 flex gap-1 items-center p-2">
          <BiDislike className="text-2xl" /> <span>1</span>
        </h2>
        <h2>
          <input
            type="text"
            placeholder="write your comment "
            className="input input-bordered w-full max-w-xs"
          />
        </h2>
      </div>
    </div>
  );
};

export default SingleBlog;
