import { LuUpload } from "react-icons/lu";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

const buttons = ["Terms Of Use", "Privacy & Policy", "Help & FAQs"];

const HeadingForm = () => {
  const [valueImg, setValueImg] = useState();
  const [activeTab, setActiveTab] = useState("Terms Of Use");
  const [inputName, setInputName] = useState("statement");
  const [inputHeading, setInputHeading] = useState("Statement");
  const [inputDetailName, setDetailName] = useState("statementfill");
  const [inputDetailHeading, setDetailHeading] = useState("Statement Fill");
  const [termsStatement, setTermsStatements] = useState({
    termsStatement: "",
    teamsFill: "",
    policyStatement: "",
    policyFill: "",
    faqStatement: "",
    faqFill: "",
  });

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
    console.log(data,{termsStatement});
  };

  useEffect(() => {
    if (activeTab === "Terms Of Use") {
      setInputName("termsStatement");
      setDetailName("teamsFill");
    } else if (activeTab === "Privacy & Policy") {
      setInputName("policyStatement");
      setDetailName("policyFill");
    } else if (activeTab === "Help & FAQs") {
      setInputName("faqStatement");
      setDetailName("faqFill");
    }

    // set heading
    if (activeTab === "Terms Of Use") {
      setInputHeading("Statement");
      setDetailHeading("Statement Fill");
    } else if (activeTab === "Privacy & Policy") {
      setInputHeading("Privacy Statement");
      setDetailHeading("Policy Details");
    } else if (activeTab === "Help & FAQs") {
      setInputHeading("FAQ Statement");
      setDetailHeading("FAQ Details");
    }
  }, [activeTab]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTermsStatements((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
          className=" border rounded-md text-[10px] h-[32px] lg:w-[49%] px-3 font-medium focus:outline-none"
          {...register("footerHeading", { required: true })}
        />
        {errors.footerHeading && (
          <p className=" text-xs text-red-500">This field is required.</p>
        )}
      </div>

      <div className=" flex md:flex-row flex-col items-end gap-x-5 w-full ">
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

        {/* <div className="lg:w-1/3 w-full my-3 md:my-0">
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
        </div> */}

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
        <div className="flex md:flex-row flex-col gap-x-5 md:border-b pb-3">
          {buttons.map((btn) => (
            <div key={btn}>
              <div
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
                  activeTab === btn &&
                  "border-b-[3px] hidden md:block top-3 border-[#20A3BA]"
                }`}
              ></div>
            </div>
          ))}
        </div>

        <div className=" my-3 flex flex-col gap-y-5">
          {/* Statement input */}
          <div className=" flex flex-col my-2">
            <label
              htmlFor={inputName}
              className=" text-sm font-medium leading-5 text-[#23262A]"
            >
              {inputHeading}
            </label>
            <input
              id={inputName}
              name={inputName}
              placeholder={inputHeading}
              className=" border rounded-md text-[10px] h-[32px] px-3 font-medium focus:outline-none"
              value={termsStatement[inputName]}
              onChange={handleChange}
              // {...register(inputName)}
            />
            {errors[inputName] && (
              <p className=" text-xs text-red-500">This field is required.</p>
            )}
          </div>
          {/* statement fill input */}
          <div className=" flex flex-col my-2">
            <label
              htmlFor={inputDetailName}
              className=" text-sm font-medium leading-5 text-[#23262A]"
            >
              {inputDetailHeading}
            </label>
            <textarea
              id={inputDetailName}
              name={inputDetailName}
              placeholder={inputDetailHeading}
              rows={3}
              className="border min-h-[136px] rounded-md text-xs p-3 font-medium focus:outline-none w-full"
              value={termsStatement[inputDetailName]}
              onChange={handleChange}
              // {...register(inputDetailName)}
            />

            {errors[inputDetailName] && (
              <p className=" text-xs text-red-500">This field is required.</p>
            )}
          </div>
        </div>

        {/* divider */}
        <div className=" bg-[#dde1eb] w-full h-3 my-10"></div>
        <h4 className=" text-3xl font-bold leading-10 text-[#23262A]">
          Pricing
        </h4>
        {/* Pricing 1 */}
        <div>
          {/* pricing level */}
          <div className=" flex flex-col my-2">
            <label
              htmlFor="pricing_level"
              className=" text-sm font-medium leading-5 text-[#23262A]"
            >
              Pricing Level
            </label>
            <input
              id="pricing_level"
              type="text"
              placeholder="Pricing Level"
              className=" border rounded-md text-[10px] max-w-[263px] h-[32px] px-3 font-medium focus:outline-none"
              {...register("pricing_level", { required: true })}
            />
            {errors.pricing_level && (
              <p className=" text-xs text-red-500">This field is required.</p>
            )}
          </div>
          {/* price */}
          <div className=" flex flex-col my-2">
            <label
              htmlFor="price"
              className=" text-sm font-medium leading-5 text-[#23262A]"
            >
              Price (USD)
            </label>
            <input
              id="price"
              type="number"
              placeholder="Price"
              className=" border rounded-md max-w-[263px] text-[10px] h-[32px] px-3 font-medium focus:outline-none"
              {...register("price", { required: true })}
            />
            {errors.price && (
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
              {...register("pricingfill", { required: true })}
            />
            {errors.pricingfill && (
              <p className=" text-xs text-red-500">This field is required.</p>
            )}
          </div>
        </div>

        {/* pricing 2 */}
        <div className=" my-5">
          {/* pricing level */}
          <div className=" flex flex-col my-2">
            <label
              htmlFor="pricing_level2"
              className=" text-sm font-medium leading-5 text-[#23262A]"
            >
              Pricing Level
            </label>
            <input
              id="pricing_level2"
              placeholder="Pricing Level"
              className=" border rounded-md text-[10px] max-w-[263px] h-[32px] px-3 font-medium focus:outline-none"
              {...register("pricing_level2", { required: true })}
            />
            {errors.pricing_level2 && (
              <p className=" text-xs text-red-500">This field is required.</p>
            )}
          </div>
          {/* price */}
          <div className=" flex flex-col my-2">
            <label
              htmlFor="price2"
              className=" text-sm font-medium leading-5 text-[#23262A]"
            >
              Price (USD)
            </label>
            <input
            type="number"
              id="price2"
              placeholder="Price"
              className=" border rounded-md max-w-[263px] text-[10px] h-[32px] px-3 font-medium focus:outline-none"
              {...register("price2", { required: true })}
            />
            {errors.price2 && (
              <p className=" text-xs text-red-500">This field is required.</p>
            )}
          </div>
          {/* pricing fill */}
          <div className=" flex flex-col my-2">
            <label
              htmlFor="pricingfill2"
              className=" text-sm font-medium leading-5 text-[#23262A]"
            >
              Pricing Fill
            </label>
            <textarea
              id="pricingfill2"
              placeholder="Pricing Fill"
              rows={3}
              className="border min-h-[136px] rounded-md text-xs p-3 font-medium focus:outline-none w-full"
              {...register("pricingfill2", { required: true })}
            />
            {errors.pricingfill2 && (
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
