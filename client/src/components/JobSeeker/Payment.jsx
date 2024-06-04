import React from "react";
import { useForm } from "react-hook-form";
import { AiFillPlusCircle } from "react-icons/ai";
const Payment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="grid md:grid-cols-2 gap-2">
          <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Full Name</span>
            </label>
            <input
              type="text"
              
              className="input input-sm input-bordered rounded-2xl"
              {...register("name", { required: true })}
            />
            {errors.job_title && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="form-control ">
            <label className="label">
              <span className=" font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-sm input-bordered rounded-2xl"
              {...register("email", { required: true })}
            />
            {errors.job_headline && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-2">
          <div className="form-control mt-3 ">
            <label>Payment Option</label>
            <select
              {...register("payment_option")}
              className="  rounded-xl p-1 bg-base-100"
            >
              <option value="part time">1</option>
              <option value="full time">2</option>
              <option value="hybridge">3</option>
            </select>
            {errors.payment_option && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control mt-3">
            <label>Currency</label>
            <select
              {...register("currency")}
              className="rounded-xl p-1 bg-base-100"
            >
              <option value="40">40</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </select>
            {errors.currency && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-2">
        <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Invoid No</span>
            </label>
            <input
              type="text"
              
              className="input input-sm input-bordered rounded-2xl"
              {...register("invoid_choice", { required: true })}
            />
            {errors.invoid_choice && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Invoid Date</span>
            </label>
            <input
              type="text"
              
              className="input input-sm input-bordered rounded-2xl"
              {...register("invoid_choice", { required: true })}
            />
            {errors.invoid_choice && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Due Date</span>
            </label>
            <input
              type="text"
              
              className="input input-sm input-bordered rounded-2xl"
              {...register("invoid_choice", { required: true })}
            />
            {errors.invoid_choice && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>


        <div className="grid md:grid-cols-3 gap-2">
        <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Bill To</span>
            </label>
            <input
              type="text"
              
              className="input input-sm input-bordered rounded-2xl"
              {...register("invoid_choice", { required: true })}
            />
            {errors.invoid_choice && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Employer Name</span>
            </label>
            <input
              type="text"
              
              className="input input-sm input-bordered rounded-2xl"
              {...register("invoid_choice", { required: true })}
            />
            {errors.invoid_choice && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Company name</span>
            </label>
            <input
              type="text"
              
              className="input input-sm input-bordered rounded-2xl"
              {...register("invoid_choice", { required: true })}
            />
            {errors.invoid_choice && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <div className="grid bg-slate-300 md:grid-cols-4 rounded-xl px-2 pt-5 pb-5 gap-2">
        <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Description</span>
            </label>
            <input
              type="text"
              
              className="input input-sm input-bordered rounded-2xl"
              {...register("invoid_choice", { required: true })}
            />
            {errors.invoid_choice && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Rate</span>
            </label>
            <input
              type="text"
              
              className="input input-sm input-bordered rounded-2xl"
              {...register("invoid_choice", { required: true })}
            />
            {errors.invoid_choice && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Hour</span>
            </label>
            <input
              type="text"
              
              className="input input-sm input-bordered rounded-2xl"
              {...register("invoid_choice", { required: true })}
            />
            {errors.invoid_choice && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Amount</span>
            </label>
            <input
              type="text"
              
              className="input input-sm input-bordered rounded-2xl"
              {...register("invoid_choice", { required: true })}
            />
            {errors.invoid_choice && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <div className="mt-3">
            <h1 className="flex gap-2"><AiFillPlusCircle className="text-2xl text-green-600" /> Add another live item</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-2">
          <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Notes to perticipent</span>
            </label>
            <input
              type="text"
              
              className="input input-sm input-bordered rounded-2xl"
              {...register("name", { required: true })}
            />
            {errors.job_title && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="form-control ">
            <label className="label">
              <span className=" font-semibold">Total anount</span>
            </label>
            <input
              type="email"
              className="input input-sm input-bordered rounded-2xl"
              {...register("email", { required: true })}
            />
            {errors.job_headline && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
<div className="flex justify-between gap-2">

        <button className="btn btn-success mt-3" type="submit">
          Download PDF
        </button>
        <button className="btn btn-success mt-3" type="submit">
          Save as Template
        </button>
        <button className="btn btn-outline btn-error mt-3" type="submit">
          Delete Template
        </button>
        <button className="btn btn-warning mt-3" type="submit">
          Send Invoice
        </button>
</div>
      </form>
    </div>
  );
};

export default Payment;
