import { TextField } from "@mui/material";
import React, { useContext } from 'react'
import Logo from '../../assets/logo_size-removebg.png'
import './style.css'
import AppBarNavigation from "../general/appbar";
import { LoadingButton } from "@mui/lab";
import { observer } from "mobx-react-lite";
import RootStoreContext from "../../store/rootStore";
import { toast } from "react-hot-toast";
import { useStripe } from "@stripe/react-stripe-js";
import PaymentController from "../../controller/paymentController";

const PaymentForm = observer(() => {
  const { paymentStore } = useContext(RootStoreContext)
  const controller = new PaymentController(paymentStore)

  const stripe = useStripe()

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

    // if (paymentStore.state.checkoutPayment?.clientSecret !== undefined) {
    //   const confirm = await stripe.confirmCardPayment(
    //     paymentStore.state.checkoutPayment.clientSecret
    //   )
    //   if (confirm.error) {
    //     return toast.error('Erro ao efetuar pagamento')
    //   } else {
    //     toast.success('Pagamento Efetuado com Sucesso!')
    //   }
    // } else {
    //   toast.error('Erro ao efetuar pagamento')
    // }
  }

  const onKeyDown = (e) => {
    e.key === 'Enter' && createSubscription()
  }
  const twoDigitRegex = /^\d{0,2}$/


  return (
    <>
      <AppBarNavigation />
      <div class="payment-general-container">
        <form
          onSubmit={createSubscription}
          class='payment-middle-container'
          onKeyDown={(e) => onKeyDown(e)} >
          <img src={Logo} alt="" style={{ width: '60px' }} />
          <h3>Concluir Inscrição - Seek Jobs</h3>
          <div className="payment-title-description-container">
            <small>Você está a só alguns passos de completar sua inscrição na nossa plataforma.
              Preencha os dados abaixo conforme solicitado e garanta as melhores vagas de tecnologia para iniciantes.
            </small>
          </div>
          <div className="payment-textfield-container">
            <label htmlFor="name">Nome Completo*</label>
            <TextField
              id="name"
              type="text"
              size="small"
              required
              value={paymentStore.state.name}
              onChange={(e) => paymentStore.setState('name', e.target.value)}
            />
          </div>
          <div className="payment-textfield-container">
            <label htmlFor="email">Email*</label>
            <TextField
              id="email"
              type="email"
              size="small"
              required
              value={paymentStore.state.email}
              onChange={(e) => paymentStore.setState('email', e.target.value)}
            />
          </div>
          <p>Informações de Pagamento -  Cartão</p>
          <div className="payment-textfield-container">
            <label htmlFor="cardExpMonth">Mês Vencimento Cartão*</label>
            <TextField
              id="cardExpMonth"
              type="number"
              size="small"
              placeholder="Um a Dois Dígitos"
              required
              value={paymentStore.state.cardExpMonth}
              onChange={(e) => {
                if (!twoDigitRegex.test(e.target.value)) {
                  toast('O campo Mês Vencimento Cartão devem receber apenas dois números e não iniciar com zero')
                } else {
                  paymentStore.setState('cardExpMonth', parseInt(e.target.value))
                }
              }}
            />
          </div>
          <div className="payment-textfield-container">
            <label htmlFor="cardExpYear">Ano Vencimento Cartão*</label>
            <TextField
              id="cardExpYear"
              type="number"
              size="small"
              placeholder="Dois Dígitos"
              required
              value={paymentStore.state.cardExpYear}
              onChange={(e) => {
                if (!twoDigitRegex.test(e.target.value)) {
                  toast('O campo Ano Vencimento Cartão devem receber apenas dois números e não iniciar com zero')
                } else {
                  paymentStore.setState('cardExpYear', parseInt(e.target.value))
                }
              }}
            />
          </div>
          <div className="payment-textfield-container">
            <label htmlFor="cardNumber">Número do Cartão*</label>
            <TextField
              id="cardNumber"
              type="text"
              size="small"
              placeholder="Número do Cartão sem Traço ou Espaço"
              required
              value={paymentStore.state.cardNumber}
              onChange={(e) => paymentStore.setState('cardNumber', e.target.value)}
            />
          </div>
          <div className="payment-textfield-container">
            <label htmlFor="cardCVC">CVC* (Código de segurança de 3 dígitos)</label>
            <TextField
              id="cardCVC"
              type="text"
              size="small"
              placeholder="Três Números"
              required
              value={paymentStore.state.cardCVC}
              onChange={(e) => paymentStore.setState('cardCVC', e.target.value)}
            />
          </div>
          <LoadingButton
            variant="contained"
            onClick={createSubscription}
            sx={{ width: "80%" }} >Concluir Inscrição</LoadingButton>
        </form>
      </div>
    </>
  );
}
)

export default PaymentForm