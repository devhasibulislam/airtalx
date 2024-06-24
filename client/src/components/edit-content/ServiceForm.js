import React from "react";
import { useForm } from "react-hook-form";

const ServiceForm = () => {
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
      <div className=" w-full flex justify-end mt-4">
        <button className=" bg-[#2792A8] text-xs rounded py-3 px-10 text-white font-semibold tracking-wider">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ServiceForm;
