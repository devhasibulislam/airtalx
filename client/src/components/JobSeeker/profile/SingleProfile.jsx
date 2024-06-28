/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoDownload } from "react-icons/go";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import verified from "../../../image/verified.svg";
import moment from "moment";
import experience from "../../../image/experience.svg";
import Markdown from "react-markdown";

const SingleProfile = () => {
  const [user, setUser] = useState([]);
  const [jobs, setJobs] = useState([]);
  const { id } = useParams();
  console.log(user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_API}/userdata/${id}`
        );
        setUser(res.data);
        //   setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the jobs!", error);
        Swal.fire({
          title: "Error!",
          text: "There was an error fetching the jobs",
          icon: "error",
          confirmButtonText: "OK",
        });
        //   setLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_API}/postjobs?id=${id}`
        );
        setJobs(res.data);
        //   setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the jobs!", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <div className="md:p-8 p-1 space-y-6 max-w-7xl mx-auto">
        <div>paginations</div>
        {/* Part 1 */}
        <div className="border border-base-200 shaow-lg p-5 rounded-xl ">
          <div className="flex gap-2 items-start  ">
            <div>
              <img
                src={user?.image}
                className="w-14 h-14 rounded-full"
                alt="user image"
              />
            </div>
            <div className="pl-2">
              <h2 className="text-[24px]  font-medium">{user?.name}</h2>
              <div className="flex gap-1 text-[14px]">
                <p>Age: {user?.age}</p>
                <p>
                  , Member Since{" "}
                  {moment(user?.createdAt).format("MMMM Do YYYY")}
                </p>
              </div>
            </div>
            <div>
              <img src={verified} alt="verified" />
            </div>
          </div>
          <div className="pt-8 grid md:grid-cols-3 grid-cols-1 gap-2">
            <div className="flex items-start flex-col gap-5">
              <div>
                <h2 className="text-[14px]">Email Address</h2>
                <h2 className="text-[15px] pt-1 text-gray-700">
                  {user?.email}
                </h2>
              </div>
              <div>
                <h2 className="text-[14px]">Portfolio</h2>
                <h2 className="text-[15px] pt-1 font-medium">
                  {user?.portfolio || "null"}
                </h2>
              </div>
              <div>
                <h2 className="text-[14px]">Preferred Salary</h2>
                <h2 className="text-[15px] pt-1 font-medium">
                  {user?.salary || "null"}/hr
                </h2>
              </div>
              <div>
                <h2 className="text-[14px] pb-1">Skill</h2>
                <h2 className="text-[15px] text-center bg-[#edf7f4] px-4 py-1 rounded-full font-medium">
                  {user?.skill}
                </h2>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-[14px]">Location</h2>
                <h2 className="text-[16px] font-medium">{user?.location}</h2>
              </div>
              <div className="mt-3">
                <h2 className="text-[14px]">Current Job</h2>
                <h2 className="text-[16px] font-medium">{user?.current_job}</h2>
              </div>
              <div className="mt-3">
                <h2 className="text-[14px]">Current Company</h2>
                <h2 className="text-[16px] font-medium">
                  {user?.current_company || "null"}
                </h2>
              </div>
            </div>
            {/* {user?.role === "job-seeker" && ( */}
            <div className="flex gap-3 text-[#5dadbe]">
              <h3 className="text-[12px] font-semibold ">CV-AironNew-2024</h3>
              <GoDownload size={20} />
            </div>
            {/* )} */}
          </div>
        </div>

        {/* Part 3 */}
        <div className="border border-base-200 rounded-xl p-5 mt-[24px]">
          <h2>Summary</h2>
        </div>

        {user?.role === "job-seeker" ? (
          <div className="border border-base-200 rounded-xl p-5 mt-[24px]">
            <div className="flex gap-3 items-center justify-between">
              <div className="flex gap-2 items-center">
                <img src={experience} alt="experience" />
                <div>
                  <h2 className="text-[24px]">Experience</h2>
                </div>
              </div>
            </div>
            {/* Experience List */}
            <div className="mt-6">
              {user?.experience?.map((m) => (
                <div
                  key={m._id}
                  className=" m-3 p-3 border-b-2 border-base-200  grid-cols-2 items-center gap-3"
                >
                  <div className="grid grid-cols-2 items-center">
                    <div className="flex gap-3 items-center">
                      <img
                        src="/assets/skill.png"
                        className="w-[72px] h-[72px]"
                        alt=""
                      />
                      <div>
                        <h2 className="text-[20px]">{m.title}</h2>
                        <h2 className="text-[14px]">{m.company}</h2>
                        <h2 className="text-[14px]">{m.start_date}</h2>
                      </div>
                    </div>
                  </div>
                  <div>{m.description}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="border border-base-200 rounded-xl p-5 mt-[24px]">
            <div className="flex gap-3 items-center justify-between">
              <div className="flex gap-2 items-center">
                <img src={experience} alt="experience" />
                <div>
                  <h2 className="text-[24px]">Job Posted</h2>
                </div>
              </div>
            </div>
            {/* Experience List */}
            <div className="mt-6">
              {jobs?.map((m) => (
                <div
                  key={m._id}
                  className=" p-3 border-b border-base-100 space-y-4"
                >
                  <div className="flex items-end justify-between">
                    <div className="flex gap-3 items-center">
                      <img
                        src="/assets/skill.png"
                        className="w-[72px] h-[72px]"
                        alt=""
                      />
                      <div>
                        <h2 className="text-[20px]">{m?.job_title}</h2>
                        <p className="text-[14px] pt-2">{m?.company}</p>
                        <div className="flex items-center  gap-3 text-gray-500">
                          <p className="text-[14px] ">{m?.location}</p>
                          <p className="text-[14px]">
                            {moment(m?.createdAt).format("MMMM Do YYYY")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 text-[#5dadbe]">
                      <h3 className="text-[12px] font-semibold ">
                        10 Applicant
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-medium text-base pb-3">
                      Job Description:
                    </h1>
                    <div
                      className="text-gray-500 text-sm"
                      dangerouslySetInnerHTML={{ __html: m?.job_description }}
                    />
                  </div>
                  <div>
                    <h1 className="font-medium text-base pb-3">
                      Job Requirements:
                    </h1>
                    <div
                      className="text-gray-500 text-sm"
                      dangerouslySetInnerHTML={{ __html: m?.job_requirements }}
                    />
                  </div>
                  <p className="text-gray-600 text-center text-sm">See more</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProfile; 
