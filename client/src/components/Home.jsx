import React from "react";
import img1 from "../image/Global.svg";
import img2 from "../image/Meeting.svg";
import { FcApproval } from "react-icons/fc";
const Home = () => {
  return (
    <div className="mt-4">

     <div className="grid md:grid-cols-2 items-center">
     <div>
        <h2 className="text-4xl font-semibold">
          {" "}
          One of the Trusted Talent Marketplaces in the Philippines.
        </h2>
        <p className="text-sm">
          Experience where talent meets opportunity, on a global scale.
        </p>
      </div>
      <div className="w-[70%] mx-auto">
        <img src={img1} alt="" />
      </div>
     </div>

     <div className="mt-4">
        <h1 className="text-3xl font-semibold">Why Us</h1>
        <h3 className="text-sm">From all of the platforms, these are some of the reason for you to choose our platform</h3>
        <div className="grid grid-cols-2 items-center mt-4">
            <div className="w-[75%] mx-auto">
                <img src={img2} alt="" />
            </div>
            <div>
                <h3 className="text-sm flex gap-1 items-center"><span><FcApproval/></span> All of your given datas will be safe and secured</h3>

                <h3 className="text-sm mt-2 flex  gap-2 "><span><FcApproval/></span> <span className="flex justify-start">Easy and safe payment methods via your bank accounts</span></h3>

                <h3 className="text-sm flex gap-2 mt-2"><span><FcApproval/></span> Access to a wide range of a job opportunities across various industries and locations</h3>
                <h3 className="text-sm flex gap-2 mt-2"><span><FcApproval/></span> Professional support and guidance throughout your job search journey</h3>

            </div>
        </div>
     </div>
    </div>
  );
};

export default Home;
