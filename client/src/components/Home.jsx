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
import ButtonAll from "./button/Button";
import { Link } from "react-router-dom";
import useAuthUser from "../auth/getUser";
import { auth } from "../firebase";
const Home = () => {
  const { user } = useAuthUser(auth);
  return (
    <div className="mt-4 max-w-7xl mx-auto textw">
      <div className="   max-w-5xl  mx-auto p-4  md:flex gap-1 justify-center tems-center ">
        <div className="max-w-[528px] mx-auto">
          <h2 className="text-[40px] font-semibold">
            {" "}
            One of the Trusted Talent Marketplaces in the Philippines.
          </h2>
          <p className="text-[20px] mt-4">
            Experience where talent meets opportunity, on a global scale.
          </p>
          <div className="mt-4">

            {!user && (
              <Link to="/login">
                <ButtonAll>Get Started</ButtonAll>
              </Link>
            )}
           

            {user?.role === "admin" && (
              <Link to="/admin-dashboard">
                <ButtonAll>Get Started</ButtonAll>
              </Link>
            )}
            {user?.role === "employer" && (
              <Link to="/employee-dashboard">
                <ButtonAll>Get Started</ButtonAll>
              </Link>
            )}
            {user?.role === "job-seeker" && (
              <Link to="/jobseeker-dashboard">
                <ButtonAll>Get Started</ButtonAll>
              </Link>
            )}
          </div>
        </div>
        <div className=" m-auto">
          <img className="w-[412px] h-[275px]" src={img1} alt="" />
        </div>
      </div>

      <div className="  max-w-7xl p-4  mx-auto  bg-slate-200 bgw">
        <h1 className="text-[36px] font-semibold  text-center">Why Us?</h1>
        <h3 className="text-xl  text-center">
          From all of the platforms, these are some of the reason for you to
          choose our platform
        </h3>

        <div className="grid md:grid-cols-2 gap-[57px] max-w-5xl  mx-auto items-center mt-6">
          <div className=" mx-auto">
            <img className="w-[402px] h-[273px]" src={img2} alt="" />
          </div>

          <div className="mt-3">
            <h3 className="text-[12px] flex gap-1 items-center">
              <span>
                <FcApproval />
              </span>{" "}
              All of your given datas will be safe and secured
            </h3>

            <h3 className="text-[12px] mt-2 flex  gap-2 ">
              <span>
                <FcApproval />
              </span>{" "}
              <span className="flex justify-start">
                Easy and safe payment methods via your bank accounts
              </span>
            </h3>

            <h3 className="text-[12px] flex gap-2 mt-2">
              <span>
                <FcApproval />
              </span>{" "}
              Access to a wide range of a job opportunities across various
              industries and locations
            </h3>
            <h3 className="text-[12px] flex gap-2 mt-2">
              <span>
                <FcApproval />
              </span>{" "}
              Professional support and guidance throughout your job search
              journey
            </h3>
            <h3 className="text-[12px] flex gap-2 mt-2">
              <span>
                <FcApproval />
              </span>{" "}
              Regular updates on the latest job openings and trends in the job
              market
            </h3>
            <h3 className="text-[12px] flex gap-2 mt-2">
              <span>
                <FcApproval />
              </span>{" "}
              Opportunities for skill development and career advancement
            </h3>
            <h3 className="text-[12px] flex gap-2 mt-2">
              <span>
                <FcApproval />
              </span>{" "}
              Interactive tools and resources to enhance your job search
              experience
            </h3>
          </div>
        </div>
      </div>

      <div className=" grid md:grid-cols-3 mt-20 gap-4 max-w-4xl  mx-auto">
        <div className="bg-[#EDF7F4] text-center bgw p-4">
          <img className="mx-auto" src={img3} alt="" />
          <h2 className="text-2xl font-semibold">Strong User Privacy</h2>
          <p className="text-[12px]">
            User’s privacy is always our first priority
          </p>
        </div>

        <div className="bg-[#EDF7F4] p-1 bgw text-center">
          <img className="mx-auto" src={img4} alt="" />
          <h2 className="text-2xl text-start font-semibold">
            User Friendly Experience
          </h2>
          <p className="text-[12px] text-start">
            Our platform is very easy to use
          </p>
        </div>

        <div className="bg-[#EDF7F4] text-center bgw p-4">
          <img className="mx-auto" src={img5} alt="" />
          <h2 className="text-2xl font-semibold">World Wide Service</h2>
          <p className="text-[12px]">Hire your staff from any country</p>
        </div>
      </div>

      <div className="mt-20 mb-20 text-center max-w-[960px]   mx-auto">
        <h1 className="text-4xl font-semibold t">Hiring Process</h1>
        <p className="mt-2 text-xl">
          Hire part-time or full-time workers in the worldwide with our easy to
          use all in one platform{" "}
        </p>

        <div className="grid md:grid-cols-3 text-center gap-3 mt-4">
          <div className="mt-3">
            <img className="mx-auto" src={img6} alt="" />
            <h2 className="text-4xl font-semibold">Post Job</h2>
            <p className="text-[12px]">
              Create your free job post and start receiving Applicants within
              ours
            </p>
          </div>
          <div className="mt-3">
            <img className="mx-auto" src={img7} alt="" />
            <h2 className="text-4xl font-semibold">Hire Staffs</h2>
            <p className="text-[12px]">
              Choose who you want to hire for your project
            </p>
          </div>
          <div className="mt-3">
            <img className="mx-auto" src={img8} alt="" />
            <h2 className="text-4xl font-semibold">Staff Work Policy</h2>
            <p className="text-[12px]">
              You decide when and how your staff works
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3 w-[80%] mx-auto mt-4 text-center">
          <div className="mt-3">
            <img className="mx-auto" src={img9} alt="" />
            <h2 className="text-4xl font-semibold">Pay Your Staff</h2>
            <p className="text-[12px]">
              Pay your staff with a click of a button
            </p>
          </div>
          <div className="mt-3">
            <img className="mx-auto" src={img10} alt="" />
            <h2 className="text-4xl font-semibold">Get your output</h2>
            <p className="text-[12px]">
              Get the promised output from your staffs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
