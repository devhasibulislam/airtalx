import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const buttons = ["Terms Of Use", "Privacy & Policy", "Help & FAQs"];

const HeadingForm = () => {
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
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const onSubmit = (data) => {
    console.log(data, { termsStatement });
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
      <div className=" bg-[#dde1eb] w-full h-3 my-5 "></div>
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
