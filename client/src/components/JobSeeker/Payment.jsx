import React from 'react';
import { useForm } from 'react-hook-form';
import { AiFillPlusCircle } from 'react-icons/ai';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51NElpiAhkmdcIHMiGJQEC60TQ7b4WD0ciHvkYmv4aMCbHmN67cW8MVjhC4piW378B15iWKi2vkoNQyy2QXSnkIoR00GW451Is6');

const Payment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
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
              {...register('name', { required: true })}
            />
            {errors.name && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-sm input-bordered rounded-2xl"
              {...register('email', { required: true })}
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-2">
          <div className="form-control mt-3">
            <label>Payment Option</label>
            <select {...register('payment_option')} className="rounded-xl p-1 bg-base-100">
              <option value="part time">1</option>
              <option value="full time">2</option>
              <option value="hybridge">3</option>
            </select>
            {errors.payment_option && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control mt-3">
            <label>Currency</label>
            <select {...register('currency')} className="rounded-xl p-1 bg-base-100">
              <option value="40">40</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </select>
            {errors.currency && <span className="text-red-500">This field is required</span>}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-2">
          <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Invoice No</span>
            </label>
            <input
              type="text"
              className="input input-sm input-bordered rounded-2xl"
              {...register('invoice_no', { required: true })}
            />
            {errors.invoice_no && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Invoice Date</span>
            </label>
            <input
              type="text"
              className="input input-sm input-bordered rounded-2xl"
              {...register('invoice_date', { required: true })}
            />
            {errors.invoice_date && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Due Date</span>
            </label>
            <input
              type="text"
              className="input input-sm input-bordered rounded-2xl"
              {...register('due_date', { required: true })}
            />
            {errors.due_date && <span className="text-red-500">This field is required</span>}
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
              {...register('bill_to', { required: true })}
            />
            {errors.bill_to && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Employer Name</span>
            </label>
            <input
              type="text"
              className="input input-sm input-bordered rounded-2xl"
              {...register('employer_name', { required: true })}
            />
            {errors.employer_name && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Company Name</span>
            </label>
            <input
              type="text"
              className="input input-sm input-bordered rounded-2xl"
              {...register('company_name', { required: true })}
            />
            {errors.company_name && <span className="text-red-500">This field is required</span>}
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
              {...register('description', { required: true })}
            />
            {errors.description && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Rate</span>
            </label>
            <input
              type="text"
              className="input input-sm input-bordered rounded-2xl"
              {...register('rate', { required: true })}
            />
            {errors.rate && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Hour</span>
            </label>
            <input
              type="text"
              className="input input-sm input-bordered rounded-2xl"
              {...register('hour', { required: true })}
            />
            {errors.hour && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" font-semibold">Amount</span>
            </label>
            <input
              type="text"
              className="input input-sm input-bordered rounded-2xl"
              {...register('amount', { required: true })}
            />
            {errors.amount && <span className="text-red-500">This field is required</span>}
          </div>
        </div>

        <div className="mt-3">
          <h1 className="flex gap-2">
            <AiFillPlusCircle className="text-2xl text-green-600" />
            Add another line item
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-2">
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Notes to participant</span>
            </label>
            <input
              type="text"
              className="input input-sm input-bordered rounded-2xl"
              {...register('notes', { required: true })}
            />
            {errors.notes && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Total Amount</span>
            </label>
            <input
              type="number"
              className="input input-sm input-bordered rounded-2xl"
              {...register('total_amount', { required: true })}
            />
            {errors.total_amount && <span className="text-red-500">This field is required</span>}
          </div>
        </div>

        <div className="mt-3">
          <Elements stripe={stripePromise}>
            <CheckoutForm amount={100} currency="usd" />
          </Elements>
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
