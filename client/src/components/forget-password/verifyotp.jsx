import React from "react";
import img1 from "../../image/signupin/Login.svg";
import ButtonAll from "../button/Button";
const VerifyOTP = () => {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 bg-[#a4e8f9]">
      <div className="mx-auto flex items-center max-md:hidden">
        <img src={img1} alt="" />
      </div>
      <div className="bg-[#eff4f5] p-3 rounded-xl">
        <h1 className="text-3xl font-semibold">Verify Your OTP</h1>
        <h2>
          We have already sent you the OTP, kindly check your Inbox or spam.{" "}
        </h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">OTP</span>
            </label>
            <input
              type="text"
              placeholder="OTP"
              className="input input-bordered rounded-2xl"
              required
            />
          </div>

          <ButtonAll>Submit</ButtonAll>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
