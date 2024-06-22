import { LuUpload } from "react-icons/lu";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
const buttons = ["Terms Of Use", "Privacy & Policy", "Help & FAQs"];
const HeadingForm = () => {
  const [valueImg, setValueImg] = useState();
  const [activeTab, setActiveTab] = useState("Terms Of Use");
  const [inputName, setInputName] = useState("statement");
  const [inpuHeading, setInputHeading] = useState("Statement");
  const [inputDetailName, setDetailName] = useState("statementfill");
  const [inputDetailHeading, setDetailHeading] = useState("Statement Fill");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (activeTab === "Terms Of Use") {
      setInputName("statement");
      setDetailName("statementfill");
    }
    if (activeTab === "Privacy & Policy") {
      setInputName("policy");
      setDetailName("privacy_statementfill");
    }
    if (activeTab === "Help & FAQs") {
      setInputName("faq");
      setDetailName("faq_statementfill");
    }
    // set heading
    if (activeTab === "Terms Of Use") {
      setInputHeading("Statement");
      setDetailHeading("Statement Fill");
    }
    if (activeTab === "Privacy & Policy") {
      setInputHeading("Privacy Statement");
      setDetailHeading("Policy Details");
    }
    if (activeTab === "Help & FAQs") {
      setInputHeading("FAQ Statement");
      setDetailHeading("FAQ Details");
    }
  }, [activeTab]);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" flex flex-col my-2">
        <label
          htmlFor="footerHeading"
          className=" text-sm font-medium leading-5 text-[#23262A]"
        >
          Footer Headlines
        </label>
        <input
          id="footerHeading"
          placeholder="Services"
          className=" border rounded-md text-[10px] h-[32px] max-w-[262.67px] px-3 font-medium focus:outline-none"
          {...register("footerHeading", { required: true })}
        />
        {errors.footerHeading && (
          <p className=" text-xs text-red-500">This field is required.</p>
        )}
      </div>

      <div className=" flex items-end gap-x-5 w-full ">
        <div className=" flex flex-col w-full">
          <label
            htmlFor="footerFill"
            className=" text-sm font-medium leading-5 text-[#23262A]"
          >
            Footer Fill
          </label>
          <input
            id="footerFill"
            placeholder="Footer fill"
            className=" border rounded-md text-[10px] h-[32px] w-full px-3 font-medium focus:outline-none"
            {...register("footerFill", { required: true })}
          />
          {errors.footerFill && (
            <p className=" text-xs text-red-500">This field is required.</p>
          )}
        </div>

        <div className="w-1/3">
          <Controller
            name="footerImage"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, name, ref, value } }) => (
              <label className="w-auto cursor-pointer text-center bg-white text-[10px] font-medium text-[#2792A8] border border-gray-600 rounded-lg hover:text-black focus:outline-none focus:shadow-outline flex justify-center items-center py-2 gap-x-3">
                <LuUpload />
                <span>{valueImg ? valueImg : "Upload Image"}</span>
                <input
                  type="file"
                  onBlur={onBlur}
                  onChange={(e) => {
                    onChange(e.target.files[0]);
                    setValueImg(e.target.files[0].name);
                  }}
                  ref={ref}
                  name={name}
                  className="hidden"
                />
              </label>
            )}
          />
          {errors.footerImage && (
            <p className=" text-xs text-red-500">This field is required.</p>
          )}
        </div>

        <div className=" flex flex-col w-full">
          <label
            htmlFor="footerLinks"
            className=" text-sm font-medium leading-5 text-[#23262A]"
          >
            Footer Links:
          </label>
          <input
            id="footerLinks"
            placeholder="Footer links"
            className=" border rounded-md text-[10px] h-[32px] w-full px-3 font-medium focus:outline-none"
            {...register("footerLinks", { required: true })}
          />
          {errors.footerLinks && (
            <p className=" text-xs text-red-500">This field is required.</p>
          )}
        </div>
      </div>
      <div className=" bg-[#dde1eb] w-full h-3 my-10"></div>
      <div>
        {/* buttons */}
        <div className="flex gap-x-5 border-b pb-3">
          {buttons.map((btn) => (
            <div>
              <div
                key={btn}
                onClick={() => handleTab(btn)}
                className={`py-2 px-5 rounded-md ${
                  activeTab === btn
                    ? "border border-gray-500 hover:opacity-70"
                    : " border border-transparent hover:bg-gray-100"
                } hover:border hover:border-gray-500 hover:shadow-md cursor-pointer`}
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
                  activeTab === btn && "border-b-[3px] top-3 border-[#20A3BA]"
                }`}
              ></div>
            </div>
          ))}
        </div>

        <div className=" my-3 flex flex-col gap-y-5">
          {/* Statement input */}
          <div className=" flex flex-col my-2">
            <label
              htmlFor={`${inputName}`}
              className=" text-sm font-medium leading-5 text-[#23262A]"
            >
              {inpuHeading}
            </label>
            <input
              id={inputName}
              placeholder={inpuHeading}
              className=" border rounded-md text-[10px] h-[32px] px-3 font-medium focus:outline-none"
              {...register(inputName, { required: true })}
            />
            {errors.statement && (
              <p className=" text-xs text-red-500">This field is required.</p>
            )}
          </div>
          {/* statement file input */}
          <div className=" flex flex-col my-2">
            <label
              htmlFor={inputDetailName}
              className=" text-sm font-medium leading-5 text-[#23262A]"
            >
              {inputDetailHeading}
            </label>
            <textarea
              id={inputDetailName}
              placeholder={inputDetailHeading}
              rows={3}
              className="border min-h-[136px] rounded-md text-xs p-3 font-medium focus:outline-none w-full"
              {...register(inputDetailName, { required: true })}
            />
            {errors.statementfile && (
              <p className=" text-xs text-red-500">This field is required.</p>
            )}
          </div>
        </div>

        {/* devider */}
        <div className=" bg-[#dde1eb] w-full h-3 my-10"></div>
        <h4 className=" text-3xl font-bold leading-10 text-[#23262A]">
          Pricing
        </h4>
        {/* Pricing 1 */}
        <div>
          {/* pricing lavel */}
          <div className=" flex flex-col my-2">
            <label
              htmlFor="pricing_lavel"
              className=" text-sm font-medium leading-5 text-[#23262A]"
            >
              Pricing level
            </label>
            <input
              id="pricing_lavel"
              placeholder="Pricing Lavel"
              className=" border rounded-md text-[10px] max-w-[263px] h-[32px] px-3 font-medium focus:outline-none"
              {...register("pricing_lavel", { required: true })}
            />
            {errors.statement && (
              <p className=" text-xs text-red-500">This field is required.</p>
            )}
          </div>
          {/* price */}
          <div className=" flex flex-col my-2">
            <label
              htmlFor="price"
              className=" text-sm font-medium leading-5 text-[#23262A]"
            >
              {"Price (USD)"}
            </label>
            <input
              id="price"
              placeholder="Price"
              className=" border rounded-md max-w-[263px] text-[10px] h-[32px] px-3 font-medium focus:outline-none"
              {...register("price", { required: true })}
            />
            {errors.statement && (
              <p className=" text-xs text-red-500">This field is required.</p>
            )}
          </div>
          {/* pricing fill */}
          <div className=" flex flex-col my-2">
            <label
              htmlFor="pricingfill"
              className=" text-sm font-medium leading-5 text-[#23262A]"
            >
              Pricing Fill
            </label>
            <textarea
              id="pricingfill"
              placeholder="Pricing Fill"
              rows={3}
              className="border min-h-[136px] rounded-md text-xs p-3 font-medium focus:outline-none w-full"
              {...register(inputDetailName, { required: true })}
            />
            {errors.statementfile && (
              <p className=" text-xs text-red-500">This field is required.</p>
            )}
          </div>
        </div>

        {/* pricing 2 */}
        <div className=" my-5">
          {/* pricing lavel */}
          <div className=" flex flex-col my-2">
            <label
              htmlFor="pricing_lavel2"
              className=" text-sm font-medium leading-5 text-[#23262A]"
            >
              Pricing level
            </label>
            <input
              id="pricing_lavel2"
              placeholder="Pricing Lavel"
              className=" border rounded-md text-[10px] max-w-[263px] h-[32px] px-3 font-medium focus:outline-none"
              {...register("pricing_lavel2", { required: true })}
            />
            {errors.statement && (
              <p className=" text-xs text-red-500">This field is required.</p>
            )}
          </div>
          {/* price */}
          <div className=" flex flex-col my-2">
            <label
              htmlFor="price2"
              className=" text-sm font-medium leading-5 text-[#23262A]"
            >
              {"Price (USD)"}
            </label>
            <input
              id="price2"
              placeholder="Price"
              className=" border rounded-md max-w-[263px] text-[10px] h-[32px] px-3 font-medium focus:outline-none"
              {...register("price2", { required: true })}
            />
            {errors.statement && (
              <p className=" text-xs text-red-500">This field is required.</p>
            )}
          </div>
          {/* pricing fill */}
          <div className=" flex flex-col my-2">
            <label
              htmlFor="pricingfill2"
              className=" text-sm font-medium leading-5 text-[#23262A]"
            >
              {inputDetailHeading}
            </label>
            <textarea
              id="pricingfill2"
              placeholder="Pricing Fill"
              rows={3}
              className="border min-h-[136px] rounded-md text-xs p-3 font-medium focus:outline-none w-full"
              {...register("pricingfill2", { required: true })}
            />
            {errors.statementfile && (
              <p className=" text-xs text-red-500">This field is required.</p>
            )}
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-end">
        <button className=" bg-[#2792A8] text-xs rounded py-3 px-10 text-white font-semibold tracking-wider">
          Submit
        </button>
      </div>
    </form>
  );
};

export default HeadingForm;
