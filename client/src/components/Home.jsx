import React from "react";
import img1 from "../image/Global.svg";
import img2 from "../image/Meeting.svg";
import img3 from "../image/user-check.svg";
import img4 from "../image/shield-check.svg";
import img5 from "../image/globe.svg";
import img6 from "../image/hiringpart/Frame 21.svg";
import img7 from "../image/hiringpart/Frame 21 (1).svg";
import img8 from "../image/hiringpart/Frame 21 (2).svg";
import img9 from "../image/hiringpart/Frame 21 (3).svg";
import img10 from "../image/hiringpart/Frame 21 (4).svg";
import { FcApproval } from "react-icons/fc";
const Home = () => {
  return (
    <div className="mt-4 w-[90%] mx-auto">
      <div className="grid md:grid-cols-2 items-center ">
        <div>
          <h2 className="text-3xl font-semibold">
            {" "}
            One of the Trusted Talent Marketplaces in the Philippines.
          </h2>
          <p className="text-sm mt-2">
            Experience where talent meets opportunity, on a global scale.
          </p>
          <div className="mt-2">
            <button className="btn btn-primary ">Get Started</button>
          </div>
        </div>
        <div className=" m-auto">
          <img className="w-[412px] h-[275px]" src={img1} alt="" />
        </div>
      </div>

      <div className="mt-12 p-3 bg-[#EDF7F4]">
        <h1 className="text-3xl font-semibold">Why Us?</h1>
        <h3 className="text-xl">
          From all of the platforms, these are some of the reason for you to
          choose our platform
        </h3>

        <div className="grid md:grid-cols-2 items-center mt-4">
          <div className="w-[75%] mx-auto">
            <img src={img2} alt="" />
          </div>

          <div className="mt-3">
            <h3 className="text-sm flex gap-1 items-center">
              <span>
                <FcApproval />
              </span>{" "}
              All of your given datas will be safe and secured
            </h3>

            <h3 className="text-sm mt-2 flex  gap-2 ">
              <span>
                <FcApproval />
              </span>{" "}
              <span className="flex justify-start">
                Easy and safe payment methods via your bank accounts
              </span>
            </h3>

            <h3 className="text-sm flex gap-2 mt-2">
              <span>
                <FcApproval />
              </span>{" "}
              Access to a wide range of a job opportunities across various
              industries and locations
            </h3>
            <h3 className="text-sm flex gap-2 mt-2">
              <span>
                <FcApproval />
              </span>{" "}
              Professional support and guidance throughout your job search
              journey
            </h3>
            <h3 className="text-sm flex gap-2 mt-2">
              <span>
                <FcApproval />
              </span>{" "}
              Regular updates on the latest job openings and trends in the job
              market
            </h3>
            <h3 className="text-sm flex gap-2 mt-2">
              <span>
                <FcApproval />
              </span>{" "}
              Opportunities for skill development and career advancement
            </h3>
            <h3 className="text-sm flex gap-2 mt-2">
              <span>
                <FcApproval />
              </span>{" "}
              Interactive tools and resources to enhance your job search
              experience
            </h3>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 mt-12 gap-4 w-[80%] mx-auto">
        <div className="bg-[#EDF7F4]">
          <img className="mx-auto" src={img3} alt="" />
          <h2 className="text-2xl font-semibold">Strong User Privacy</h2>
          <p className="text-sm">User’s privacy is always our first priority</p>
        </div>

        <div className="bg-[#EDF7F4]">
          <img className="mx-auto" src={img4} alt="" />
          <h2 className="text-2xl font-semibold">User Friendly Experience</h2>
          <p className="text-sm">Our platform is very easy to use</p>
        </div>

        <div className="bg-[#EDF7F4]">
          <img className="mx-auto" src={img5} alt="" />
          <h2 className="text-2xl font-semibold">World Wide Service</h2>
          <p className="text-sm">Hire your staff from any country</p>
        </div>
      </div>

      <div className="mt-12 w-[80%] mx-auto">
        <h1 className="text-3xl font-semibold">Hiring Process</h1>
        <p className="mt-2">Hire part-time or full-time workers in the worldwide with our easy to use all in one platform  </p>
        <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="mt-3">
                <img className="mx-auto" src={img6} alt="" />
                <h2 className="text-2xl font-semibold">Post Job</h2>
                <p className="text-[11px]">Create your free job post and start receiving Applicants within ours</p>
            </div>
            <div className="mt-3">
                <img className="mx-auto" src={img7} alt="" />
                <h2 className="text-2xl font-semibold">Hire Staffs</h2>
                <p className="text-[11px]">Choose who you want to hire for your project</p>
            </div>
            <div className="mt-3">
                <img className="mx-auto" src={img8} alt="" />
                <h2 className="text-2xl font-semibold">Staff Work Policy</h2>
                <p className="text-[11px]">You decide when and how your staff  works</p>
            </div>
            <div className="mt-3">
                <img className="mx-auto" src={img9} alt="" />
                <h2 className="text-2xl font-semibold">Pay Your Staff</h2>
                <p className="text-[11px]">Pay your staff with a click of a button</p>
            </div>
            <div className="mt-3">
                <img className="mx-auto" src={img10} alt="" />
                <h2 className="text-2xl font-semibold">Get your output</h2>
                <p className="text-[11px]">Get  the promised output from your staffs</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
