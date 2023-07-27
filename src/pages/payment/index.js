import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import PaymentForm from '../../components/paymentForm';


const PaymentPage = () => {
  const stripePromise = loadStripe(
    process.env.REACT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );


  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  )
}

export default PaymentPage