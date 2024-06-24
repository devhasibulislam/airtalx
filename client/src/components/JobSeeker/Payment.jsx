// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { AiFillPlusCircle } from "react-icons/ai";
// import usePayPalScript from "./UsePaypalSript";
// // import usePayPalScript from "./usePayPalScript"; // Import the custom hook

// const Payment = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     // reset,
//   } = useForm();

//   const onSubmit = async (data) => {
//     console.log(data);
//   };

//   // Use the custom hook to load the PayPal SDK
//   usePayPalScript("YOUR_CLIENT_ID"); // Replace with your actual PayPal client ID

//   useEffect(() => {
//     if (window.paypal) {
//       window.paypal.Buttons({
//         createOrder: (data, actions) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: "100.00", // Replace with the actual amount
//                 },
//               },
//             ],
//           });
//         },
//         onApprove: (data, actions) => {
//           return actions.order.capture().then((details) => {
//             alert("Transaction completed by " + details.payer.name.given_name);
//             console.log(details);
//           });
//         },
//       }).render('#paypal-button-container');
//     }
//   }, []);

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//       <div className="grid md:grid-cols-2 gap-2">
//           <div className="form-control">
//             <label className="label">
//               <span className=" font-semibold">Full Name</span>
//             </label>
//             <input
//               type="text"

//               className="input input-sm input-bordered rounded-2xl"
//               {...register("name", { required: true })}
//             />
//             {errors.job_title && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>

//           <div className="form-control ">
//             <label className="label">
//               <span className=" font-semibold">Email</span>
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="input input-sm input-bordered rounded-2xl"
//               {...register("email", { required: true })}
//             />
//             {errors.job_headline && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-2">
//           <div className="form-control mt-3 ">
//             <label>Payment Option</label>
//             <select
//               {...register("payment_option")}
//               className="  rounded-xl p-1 bg-base-100"
//             >
//               <option value="part time">1</option>
//               <option value="full time">2</option>
//               <option value="hybridge">3</option>
//             </select>
//             {errors.payment_option && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>
//           <div className="form-control mt-3">
//             <label>Currency</label>
//             <select
//               {...register("currency")}
//               className="rounded-xl p-1 bg-base-100"
//             >
//               <option value="40">40</option>
//               <option value="25">25</option>
//               <option value="30">30</option>
//             </select>
//             {errors.currency && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-2">
//         <div className="form-control">
//             <label className="label">
//               <span className=" font-semibold">Invoid No</span>
//             </label>
//             <input
//               type="text"

//               className="input input-sm input-bordered rounded-2xl"
//               {...register("invoid_choice", { required: true })}
//             />
//             {errors.invoid_choice && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>
//         <div className="form-control">
//             <label className="label">
//               <span className=" font-semibold">Invoid Date</span>
//             </label>
//             <input
//               type="text"

//               className="input input-sm input-bordered rounded-2xl"
//               {...register("invoid_choice", { required: true })}
//             />
//             {errors.invoid_choice && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>
//         <div className="form-control">
//             <label className="label">
//               <span className=" font-semibold">Due Date</span>
//             </label>
//             <input
//               type="text"

//               className="input input-sm input-bordered rounded-2xl"
//               {...register("invoid_choice", { required: true })}
//             />
//             {errors.invoid_choice && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-2">
//         <div className="form-control">
//             <label className="label">
//               <span className=" font-semibold">Bill To</span>
//             </label>
//             <input
//               type="text"

//               className="input input-sm input-bordered rounded-2xl"
//               {...register("invoid_choice", { required: true })}
//             />
//             {errors.invoid_choice && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>
//         <div className="form-control">
//             <label className="label">
//               <span className=" font-semibold">Employer Name</span>
//             </label>
//             <input
//               type="text"

//               className="input input-sm input-bordered rounded-2xl"
//               {...register("invoid_choice", { required: true })}
//             />
//             {errors.invoid_choice && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>
//         <div className="form-control">
//             <label className="label">
//               <span className=" font-semibold">Company name</span>
//             </label>
//             <input
//               type="text"

//               className="input input-sm input-bordered rounded-2xl"
//               {...register("invoid_choice", { required: true })}
//             />
//             {errors.invoid_choice && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>
//         </div>

//         <div className="grid bg-slate-300 md:grid-cols-4 rounded-xl px-2 pt-5 pb-5 gap-2">
//         <div className="form-control">
//             <label className="label">
//               <span className=" font-semibold">Description</span>
//             </label>
//             <input
//               type="text"

//               className="input input-sm input-bordered rounded-2xl"
//               {...register("invoid_choice", { required: true })}
//             />
//             {errors.invoid_choice && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>
//         <div className="form-control">
//             <label className="label">
//               <span className=" font-semibold">Rate</span>
//             </label>
//             <input
//               type="text"

//               className="input input-sm input-bordered rounded-2xl"
//               {...register("invoid_choice", { required: true })}
//             />
//             {errors.invoid_choice && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>
//         <div className="form-control">
//             <label className="label">
//               <span className=" font-semibold">Hour</span>
//             </label>
//             <input
//               type="text"

//               className="input input-sm input-bordered rounded-2xl"
//               {...register("invoid_choice", { required: true })}
//             />
//             {errors.invoid_choice && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>
//         <div className="form-control">
//             <label className="label">
//               <span className=" font-semibold">Amount</span>
//             </label>
//             <input
//               type="text"

//               className="input input-sm input-bordered rounded-2xl"
//               {...register("invoid_choice", { required: true })}
//             />
//             {errors.invoid_choice && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>
//         </div>
//         <div className="mt-3">
//           <h1 className="flex gap-2">
//             <AiFillPlusCircle className="text-2xl text-green-600" />
//             Add another line item
//           </h1>
//         </div>

//         <div className="grid md:grid-cols-2 gap-2">
//           <div className="form-control">
//             <label className="label">
//               <span className="font-semibold">Notes to participant</span>
//             </label>
//             <input
//               type="text"
//               className="input input-sm input-bordered rounded-2xl"
//               {...register("notes", { required: true })}
//             />
//             {errors.notes && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>

//           <div className="form-control ">
//             <label className="label">
//               <span className="font-semibold">Total amount</span>
//             </label>
//             <input
//               type="number"
//               className="input input-sm input-bordered rounded-2xl"
//               {...register("total_amount", { required: true })}
//             />
//             {errors.total_amount && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>
//         </div>

//         <div id="paypal-button-container"></div>

//         <div className="flex justify-between gap-2">
//           <button className="btn btn-success mt-3" type="submit">
//             Download PDF
//           </button>
//           <button className="btn btn-success mt-3" type="submit">
//             Save as Template
//           </button>
//           <button className="btn btn-outline btn-error mt-3" type="submit">
//             Delete Template
//           </button>
//           <button className="btn btn-warning mt-3" type="submit">
//             Send Invoice
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Payment;

import React from "react";
import { useForm } from "react-hook-form";
import { AiFillPlusCircle } from "react-icons/ai";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";

// Replace with your actual Stripe publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod);
      // You can send the paymentMethod.id to your server for further processing
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const Payment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
              <span className="font-semibold">Full Name</span>
            </label>
            <input
              type="text"
              className="input input-sm input-bordered rounded-2xl"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-sm input-bordered rounded-2xl"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-2">
          <div className="form-control mt-3">
            <label>Payment Option</label>
            <select
              {...register("payment_option")}
              className="rounded-xl p-1 bg-base-100"
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
              <span className="font-semibold">Invoice No</span>
            </label>
            <input
              type="text"
              className="input input-sm input-bordered rounded-2xl"
              {...register("invoice_no", { required: true })}
            />
            {errors.invoice_no && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Invoice Date</span>
            </label>
            <input
              type="date"
              className="input input-sm input-bordered rounded-2xl"
              {...register("invoice_date", { required: true })}
            />
            {errors.invoice_date && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Due Date</span>
            </label>
            <input
              type="date"
              className="input input-sm input-bordered rounded-2xl"
              {...register("due_date", { required: true })}
            />
            {errors.due_date && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-2">
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Bill To</span>
            </label>
            <input
              type="text"
              className="input input-sm input-bordered rounded-2xl"
              {...register("bill_to", { required: true })}
            />
            {errors.bill_to && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Employer Name</span>
            </label>
            <input
              type="text"
              className="input input-sm input-bordered rounded-2xl"
              {...register("employer_name", { required: true })}
            />
            {errors.employer_name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Company Name</span>
            </label>
            <input
              type="text"
              className="input input-sm input-bordered rounded-2xl"
              {...register("company_name", { required: true })}
            />
            {errors.company_name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <div className="grid bg-slate-300 md:grid-cols-4 rounded-xl px-2 pt-5 pb-5 gap-2">
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Description</span>
            </label>
            <input
              type="text"
              className="input input-sm input-bordered rounded-2xl"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Rate</span>
            </label>
            <input
              type="number"
              className="input input-sm input-bordered rounded-2xl"
              {...register("rate", { required: true })}
            />
            {errors.rate && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Hour</span>
            </label>
            <input
              type="number"
              className="input input-sm input-bordered rounded-2xl"
              {...register("hour", { required: true })}
            />
            {errors.hour && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Amount</span>
            </label>
            <input
              type="number"
              className="input input-sm input-bordered rounded-2xl"
              {...register("amount", { required: true })}
            />
            {errors.amount && (
              <span className="text-red-500">This field is required</span>
            )}
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
              {...register("notes", { required: true })}
            />
            {errors.notes && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Total amount</span>
            </label>
            <input
              type="number"
              className="input input-sm input-bordered rounded-2xl"
              {...register("total_amount", { required: true })}
            />
            {errors.total_amount && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        <div className="mt-5">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>

        <div className="flex justify-between gap-2 mt-5">
          <button className="btn btn-success" type="submit">
            Download PDF
          </button>
          <button className="btn btn-success" type="submit">
            Save as Template
          </button>
          <button className="btn btn-outline btn-error" type="submit">
            Delete Template
          </button>
          <button className="btn btn-warning" type="submit">
            Send Invoice
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
