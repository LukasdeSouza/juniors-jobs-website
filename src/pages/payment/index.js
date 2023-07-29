import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect } from 'react'
import PaymentForm from '../../components/paymentForm';
import { getToken } from '../../utils/getToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const PaymentPage = () => {
  const stripePromise = loadStripe(
    process.env.REACT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );
  const navigate = useNavigate()

  useEffect(() => {
    const token = getToken()
    if (token === null) {
      navigate('/')
    }
  }, [])

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  )
}

export default PaymentPage