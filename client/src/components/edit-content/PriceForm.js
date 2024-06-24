import React from "react";
import { useForm } from "react-hook-form";

const PriceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" bg-[#dde1eb] w-full h-3 my-10"></div>
      <h4 className=" text-3xl font-bold leading-10 text-[#23262A]">Pricing</h4>
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
      <div className=" w-full flex justify-end">
        <button className=" bg-[#2792A8] text-xs rounded py-3 px-10 text-white font-semibold tracking-wider">
          Submit
        </button>
      </div>
    </form>
  );
};

export default PriceForm;
