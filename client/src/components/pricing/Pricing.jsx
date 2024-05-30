import React from "react";
import { FcCheckmark } from "react-icons/fc";

const Pricing = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      
      <div className="flex justify-center p-5 gap-5">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="p-2 bg-[#2792A8]">
            <h2 className="text-xl font-semibold">Most popular</h2>
          </figure>

          <div className="text-center">
            <h2 className=" text-center text-2xl font-semibold">
              Professional Tier!
            </h2>
            <p className="text-3xl">
              <span className=" font-bold"> $49</span>/month{" "}
            </p>
          </div>
          <div className="card-body">

            <div>
                <h2 className="flex gap-2 items-center"><FcCheckmark className="text-xl" /> Communicate with Workers</h2>
                <h2 className="flex gap-2 items-center"><FcCheckmark className="text-xl" /> Hire Workers</h2>
                <h2 className="flex gap-2 items-center"><FcCheckmark className="text-xl" />Create up to **10 job posts** per month</h2>
                <h2 className="flex gap-2 items-center"><FcCheckmark className="text-xl" />Instant Job Post approva</h2>
                <h2 className="flex gap-2 items-center"><FcCheckmark className="text-xl" />View Job Applications</h2>
                <h2 className="flex gap-2 items-center"><FcCheckmark className="text-xl" />Bookmark Workers</h2>
                <h2 className="flex gap-2 items-center"><FcCheckmark className="text-xl" /> Invite **25 workers** per job post</h2>
                <h2 className="flex gap-2 items-center"><FcCheckmark className="text-xl" />Customer Support</h2>
            </div>
          </div>

            <div className="flex justify-center">
              <button className="btn btn-accent">Upgrade Now</button>
            </div>
        </div>

       
      </div>
    </div>
  );
};

export default Pricing;
