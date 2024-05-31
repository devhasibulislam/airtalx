import React from "react";
import img from "../../image/Feedback.svg";
const Contactus = () => {
  return (
    <div className="grid grid-cols-2 items-center m-7">
      <div>
        <h1 className="text-3xl font-semibold">
          Any Question, feedback, or suggestions?
        </h1>
        <p className="text-[12px] mt-4">
          Take advantage of our various free customers focused option.
        </p>
        <h2 className="text-sm mt-2">Visit our <span className="text-blue-500">support page</span> to get help that you need</h2>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Contactus;
