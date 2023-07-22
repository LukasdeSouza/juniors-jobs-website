import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react'
import PaymentForm from '../../components/paymentForm';
import PaymentController from '../../controller/paymentController'
import RootStoreContext from '../../store/rootStore';

const PaymentPage = () => {
  const { paymentStore } = useContext(RootStoreContext)
  const controller = new PaymentController(paymentStore)

  const stripePromise = loadStripe(
    process.env.REACT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const createSubscription = async () => {
    let dataObj = {
      name: paymentStore.state.name,
      email: paymentStore.state.email,
      priceId: paymentStore.state.priceId,
      cardExpMonth: paymentStore.state.cardExpMonth,
      cardExpYear: paymentStore.state.cardExpYear,
      cardNumber: paymentStore.state.cardNumber,
      cvc: paymentStore.state.cardCVC
    }
    await controller.checkoutPayment(dataObj)

    if (paymentStore.state.checkoutPayment?.clientSecret !== {}) {
      const confirm = await this.stripe.confirmCardPayment(
        paymentStore.state.checkoutPayment.clientSecret
      )
      if (confirm.error) {
        return alert('Erro ao efetuar pagamento')
      } else {
        alert('Pagamento Efetuado com Sucesso!')
      }
    } else {
      alert('erro ao efetuar pagamento')
    }
  }

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm createSubscription={createSubscription} />
    </Elements>
  )
}

export default PaymentPage