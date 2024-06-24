// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const CheckoutForm = ({ amount, currency }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     const response = await fetch('http://localhost:8080/v1/api/payment/str', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ amount: amount * 100, currency: currency }), // amount in cents
//     });

//     const { clientSecret } = await response.json();

//     const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: cardElement,
//       },
//     });

//     if (paymentResult.error) {
//       setError(`Payment failed: ${paymentResult.error.message}`);
//     } else {
//       setError(null);
//       setSuccess(true);
//     }
//   };

//   return (
//     <form className=' mt-5 p-5' onSubmit={handleSubmit}>
//       <CardElement />

//       <button className='bg-red-500 p-5' type="submit" color='red' disabled={!stripe}>
//         Pay
//       </button>

//       {error && <div>{error}</div>}
//       {success && <div>Payment succeeded!</div>}
//     </form>
//   );
// };

// export default CheckoutForm;

import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';

const CheckoutForm = ({ handleSubmit, loading }) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit({
      elements: event.target.elements,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default CheckoutForm;
