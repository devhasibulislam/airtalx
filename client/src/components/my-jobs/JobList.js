import React, { useEffect, useState } from "react";
import useAuthUser from "../../auth/getUser";
import formatDate from "../../lib/formatDate";
import axios from "axios";
import Swal from "sweetalert2";
const buttons = ["Open and paused", "Cancled"];

const JobList = () => {
  const [loader, setLoader] = useState(1)
  const [jobs, setJobs ] = useState([]);
  const [openJobQty, setJobQty] = useState({
    openAndPaused: 0,
    cancled: 0,
  })
  const [activeTab, setActiveTab] = useState("Open and paused");
  const [toDisplay, setToDisplay] = useState(
    jobs.filter((job) => job.status !== "Cancled")
  );
const {user} = useAuthUser();

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const fetchJobs = async () => {
    if (user?._id) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_API}/postjobs?id=${user?._id}`
        );
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [user, loader]);

  useEffect(() => {
   
    setJobQty({
      openAndPaused: (jobs.filter((job) => job.status !== "Cancled").length),
      cancled: (jobs.filter((job) => job.status === "Cancled").length)
    })
    if (activeTab === "Open and paused") {
      setToDisplay(jobs.filter((job) => job.status !== "Cancled"));
    }

    if (activeTab === "Cancled") {
      setToDisplay(jobs.filter((job) => job.status === "Cancled"));
    }
  }, [activeTab, jobs]);
  const handleJobStateChange = async (id,body) => { 
    const res = await axios.put(`${process.env.REACT_APP_BASE_API}/postjobs/${id}`,{status: body})
    setLoader(loader+1)
    console.log("resssssss", res.data)
    if(res.data.status === 200){
      Swal.fire({
        position: "top",
        icon: "success",
        title:` Status changed to ${body}!`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
   }

  //  console.log(activeTab)

  return (
    <div className="p-4">
      {/* buttons */}
      <div className="flex flex-col md:flex-row gap-x-5 border-b pb-3">
        {buttons.map((btn) => (
          <div key={btn}>
            <div
              onClick={() => handleTab(btn)}
              className={`py-2 px-5 rounded-md border lg:border-none mt-1 ${
                activeTab === btn ? "hover:opacity-70" : "hover:bg-gray-100"
              } hover:shadow-md cursor-pointer`}
            >
              <span
                className={`xl:text-lg text-sm ${
                  activeTab === btn
                    ? "font-semibold text-[#20A3BA]"
                    : "text-gray-500 font-normal"
                }`}
              >
                {btn} {btn === "Open and paused" ? `(${openJobQty?.openAndPaused })`: `(${openJobQty?.cancled})`}
              </span>
            </div>
            <div
              className={`relative ${
                activeTab === btn &&
                "border-b-[3px] hidden md:block top-3 border-[#20A3BA]"
              }`}
            ></div>
          </div>
        ))}
      </div>
      <div className="">
        <input
          type="text"
          placeholder="Filter a job by search"
          className="mt-4 p-2 border border-gray-300 w-full md:w-1/2 rounded-xl px-5"
        />
      </div>

      <div className="mt-4 space-y-4">
        {toDisplay?.map((job) => (
          <div
            key={job.id}
            className="flex flex-col xl:flex-row lg:justify-between items-start gap-y-5 xl:items-center p-4 gap-x-5 border border-gray-300 rounded"
          >
            <div className="flex-1 mb-4 md:mb-0">
              <div className="text-md font-semibold">{job.job_title}</div>
              <div className="text-gray-500">{job.location}</div>
              <div className="text-gray-500">Posted: {formatDate(job.createdAt)}</div>
            </div>
            <div className="flex lg:flex-row flex-col space-x-4 mb-4 md:mb-0">
              <div className="text-center pt-4 text-sm">
                <div className="font-semibold text-[#20A3BA]">
                  {job?.candidates?.active || 0}
                </div>
                <div className="text-[#20A3BA]">Active</div>
              </div>
              {/* list numbers */}
              <div className="flex flex-row gap-x-5 text-sm px-4 pt-4 pb-8 rounded-xl bg-[#dde1eb] text-[#20A3BA]">
                <div className="text-center">
                  <div className="font-semibold">{job?.candidates?.awaiting || 0}</div>
                  <div className="">Awaiting</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">
                    {job?.candidates?.contacting || 0}
                  </div>
                  <div className="">Contacting</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">{job?.candidates?.hired || 0}</div>
                  <div className="">Hired</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
              <button className="font-medium text-sm mb-4 md:mb-0 text-start">
                Invite <br /> More <br /> Candidates
              </button>
              <select onChange={(e)=>handleJobStateChange(job._id, e.target.value)} className="border border-gray-300 py-3 px-2 rounded-xl text-xs font-medium pr-24">
                <option value={job.status} >{job.status}</option>
                <option value="Paused" className={`${job.status === "Paused" && "hidden"}`}>Paused</option>
                <option value="Active" className={`${job.status === "Active" && "hidden"}`}>Active</option>
                <option value="Cancled" className={`${job.status === "Cancled" && "hidden"}`}>Cancled</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
