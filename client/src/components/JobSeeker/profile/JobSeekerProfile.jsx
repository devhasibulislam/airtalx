import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { LuSun } from "react-icons/lu";
import { PiHandbagSimpleFill } from "react-icons/pi";
import img1 from "../../../image/man.svg"
const JobSeekerProfile = () => {
  const handletoggle = (e) => {
    if (e.target.checked) {
    } else {
    }
  };
  return (
    <div className="m-8">
      {/* part 1 */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div>
            <img src={img1} className="w-10 h-10 rounded-full" alt="" />
          </div>
          <div>
            <h2 className="text-[24px] font-medium">Devid</h2>
            <div className="flex gap-1 text-[14px]">
              <p>age : 25</p>
              <p>,Member Since 25 May 2024</p>
            </div>
          </div>
        </div>
        <div>
          <button className="text-[16px] flex items-center gap-2">
            make visible to public{" "}
            <label className="switch">
              <input onChange={handletoggle} type="checkbox" />
              <div className="slider">
                <div className="circle">
                  <LuSun className="text-warning" />
                </div>
              </div>
            </label>
          </button>
        </div>
      </div>
      {/* part 2 */}

      <div className="grid grid-cols-3">
        <div className="mt-[24px] grid grid-cols-2 col-span-2">
          <div className="">
            <div>
              <h2 className="text-[14px]">Email adress</h2>
              <h2 className="text-[16px] text-slate-400">myemail@gmail.com</h2>
            </div>
            <div className="mt-3">
              <h2 className="text-[14px]">Phone Number</h2>
              <h2 className="text-[16px] font-medium">+880123454</h2>
            </div>
            <div className="mt-3">
              <h2 className="text-[14px]">Portfolio</h2>
              <h2 className="text-[16px] font-medium">myport./portfolio</h2>
            </div>
            <div className="mt-3">
              <h2 className="text-[14px]">Preffered Salary</h2>
              <h2 className="text-[16px] font-medium">10$/hr</h2>
            </div>
            <div className="mt-3">
              <h2 className="text-[14px]">Skill</h2>
              <h2 className="text-[16px] font-medium">Software Development</h2>
            </div>
          </div>
          <div className="">
            <div>
              <h2 className="text-[14px]">Location</h2>
              <h2 className="text-[16px] font-medium">Dhaka,Bangladesh</h2>
            </div>
            <div className="mt-3">
              <h2 className="text-[14px]">Carrent Job</h2>
              <h2 className="text-[16px] font-medium">+Web Developer</h2>
            </div>
            <div className="mt-3">
              <h2 className="text-[14px]">Carrent Company</h2>
              <h2 className="text-[16px] font-medium">AirTalX</h2>
            </div>
            <div className="mt-3">
              <h2 className="text-[14px]">Preffered Employment</h2>
              <h2 className="text-[16px] font-medium">Full-Time</h2>
            </div>
            <div className="mt-3">
              <h2 className="text-[14px]">Skill level</h2>
              <h2 className="text-[16px] font-medium">5 years +</h2>
            </div>
          </div>
        </div>
        <div className="mt-[24px] flex flex-col  ">
          <div>
            <button className=" bg-[#2792A8] px-6 py-3  rounded-lg">
              Edit Profile
            </button>
            <button className=" btn btn-outline mt-5">Upload Resume</button>
            <h3 className="text-[12px ] font-medium mt-5">CV-AironNew-2024</h3>
            <button className="text-red-500 mt-24 flex gap-2">
              Delete Account <AiOutlineDelete className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      {/* Part 3 */}

      <div className="border border-base-200 rounded-xl p-4 mt-[24px]">
        <h2>Summery</h2>
      </div>

      {/* Part 4 */}

      <div className="border border-base-200 rounded-xl p-4 mt-[24px]">
        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-2 items-center">
            <PiHandbagSimpleFill className="text-4xl text-[#2792A8]" />
            <div>
              <h2 className="text-[24px]">Experience</h2>
              <h2 className="text-[14px]">
                Add experience to increase the chance of hiring
              </h2>
            </div>
          </div>
          <div>
            <button className="text-[#2792A8]">Add Experience</button>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-3 ">
            <img src="" className="w-6 h-6" alt="" />
            <div>
              <h2 className="text-[20px]">Recruitment Specialist</h2>
              <h2 className="text-[14px]">Airtalx</h2>
              <h2 className="text-[14px]">
                Dhaka Bangladesh, May 25 2024 at present
              </h2>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="mt-3">
              <p className="text-[14px]">
                Expertise in In-House talent acquistion and recruitment process
                Outsorcing
              </p>
              <p className="text-[14px]">
                More than 4 years of dedicated recruitment experience
              </p>
              <p className="text-[14px]">
                Succesfully served international clients across diverse
                industries
              </p>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="toggle" checked /> <p>Show</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mt-3">
              <p className="text-[14px]">
                Expertise in In-House talent acquistion and recruitment process
                Outsorcing
              </p>
              <p className="text-[14px]">
                More than 4 years of dedicated recruitment experience
              </p>
              <p className="text-[14px]">
                Succesfully served international clients across diverse
                industries
              </p>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="toggle" checked /> <p>Show</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mt-3">
              <p className="text-[14px]">
                Expertise in In-House talent acquistion and recruitment process
                Outsorcing
              </p>
              <p className="text-[14px]">
                More than 4 years of dedicated recruitment experience
              </p>
              <p className="text-[14px]">
                Succesfully served international clients across diverse
                industries
              </p>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="toggle" checked /> <p>Show</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerProfile;
