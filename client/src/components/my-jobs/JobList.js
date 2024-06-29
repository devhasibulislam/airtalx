import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
const buttons = ["Open and paused", "Cancled"];

const JobList = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Programmer",
      location: "JKT, IDN",
      postedDate: "May 23, 2024",
      status: "Paused",
      candidates: { active: 12, awaiting: 12, contacting: 12, hired: 12 },
    },
    {
      id: 2,
      title: "Programmer",
      location: "JKT, IDN",
      postedDate: "May 23, 2024",
      status: "Paused",
      candidates: { active: 12, awaiting: 12, contacting: 12, hired: 12 },
    },
    {
      id: 3,
      title: "Programmer",
      location: "JKT, IDN",
      postedDate: "May 23, 2024",
      status: "Paused",
      candidates: { active: 12, awaiting: 12, contacting: 12, hired: 12 },
    },
    {
      id: 4,
      title: "Programmer",
      location: "JKT, IDN",
      postedDate: "May 23, 2024",
      status: "Paused",
      candidates: { active: 12, awaiting: 12, contacting: 12, hired: 12 },
    },
    {
      id: 5,
      title: "Programmer",
      location: "JKT, IDN",
      postedDate: "May 23, 2024",
      status: "Cancled",
      candidates: { active: 12, awaiting: 12, contacting: 12, hired: 12 },
    },
  ]);
  const [activeTab, setActiveTab] = useState("Open and paused");
  const [toDisplay, setToDisplay] = useState();
  const handleTab = (tab) => {
    setActiveTab(tab);
    if(activeTab === "Open and paused"){
        setToDisplay(jobs.filter(job => job.status !== "Cancled"))
     }
 
     if(activeTab === "Cancled"){
         setToDisplay(jobs.filter(job => job.status === "Cancled"))
     }
  };


   console.log(toDisplay)

  return (
    <div className="p-4">
      {/* buttons */}
      <div className="flex md:flex-row flex-col gap-x-5 md:border-b pb-3">
        {buttons.map((btn) => (
          <div key={btn}>
            <div
              onClick={() => handleTab(btn)}
              className={`py-2 px-5 rounded-md ${
                activeTab === btn
                  ? " hover:opacity-70"
                  : " hover:bg-gray-100"
              } hover:shadow-md cursor-pointer`}
            >
              <span
                className={`text-lg ${
                  activeTab === btn
                    ? "font-semibold text-[#20A3BA]"
                    : "text-gray-500 font-normal"
                }`}
              >
                {btn}
              </span>
            </div>
            <div
              className={` relative ${
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
          className="mt-4 p-2 border border-gray-300 w-1/2 rounded-xl px-5"
        />
      </div>

      <div className="mt-4 space-y-4">
        {toDisplay?.map((job) => (
          <div
            key={job.id}
            className="flex justify-between items-center p-4 border border-gray-300 rounded"
          >
            <div>
              <div className="text-md font-semibold">{job.title}</div>
              <div className="text-gray-500">{job.location}</div>
              <div className="text-gray-500">Posted: {job.postedDate}</div>
            </div>
            <div className="flex space-x-4">
              <div className="text-center pt-4 text-sm">
                <div className="font-semibold text-[#20A3BA]">
                  {job.candidates.active}
                </div>
                <div className="text-[#20A3BA]">Active</div>
              </div>
              {/* list numbers */}
              <div className=" flex gap-x-5 text-sm px-4 pt-4 pb-8 rounded-xl bg-[#dde1eb] text-[#20A3BA]">
                <div className="text-center">
                  <div className="font-semibold">{job.candidates.awaiting}</div>
                  <div className="">Awaiting</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">
                    {job.candidates.contacting}
                  </div>
                  <div className="">Contacting</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">{job.candidates.hired}</div>
                  <div className="">Hired</div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className=" font-medium text-sm">
                Invite More Candidates
              </button>
              <select className="border border-gray-300 py-3 px-2 rounded-xl text-xs font-medium pr-24">
                <option value="paused">Paused</option>
                <option value="active">Active</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
