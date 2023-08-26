import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useContext } from 'react'
import Logo from '../../assets/logo_size-removebg.png'
import './style.css'
import AppBarNavigation from "../general/appbar";
import { LoadingButton } from "@mui/lab";
import { observer } from "mobx-react-lite";
import RootStoreContext from "../../store/rootStore";
import { toast } from "react-hot-toast";
import PaymentController from "../../controller/paymentController";
import { useNavigate } from "react-router-dom";
import { dashRegex, ifBeginsWithZero, threeDigitRegex, twoDigitRegex } from "../../utils/regex";

const PaymentForm = observer(() => {
  const { paymentStore } = useContext(RootStoreContext)
  const controller = new PaymentController(paymentStore)
  const navigate = useNavigate()

  const buyedSucessfully = () => {
    navigate('/buyedsucessfully')
  }

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
    await controller.checkoutPayment(dataObj, buyedSucessfully)

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

  return (
    <>
      <AppBarNavigation />
      <div class="payment-general-container">
        <form
          onSubmit={createSubscription}
          class='payment-middle-container'
          onKeyDown={(e) => onKeyDown(e)} >
          <img src={Logo} alt="Seek Jobs Logo" style={{ width: '60px' }} />
          {/* <h3>Concluir Inscrição 💼</h3> */}
          <div className="payment-title-description-container">
            <small>
              Preencha os dados abaixo e garanta as melhores vagas de tecnologia para iniciantes.
            </small>
            <br />
            <small>
              <b>{paymentStore.state.planName ?? 'Confirmação de Pagamento'}</b>
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
            <label htmlFor="cardExpMonth">Mês de Vencimento do Cartão*</label>
            <TextField
              id="cardExpMonth"
              type="number"
              size="small"
              placeholder="Um a Dois Dígitos"
              required
              value={paymentStore.state.cardExpMonth}
              onChange={(e) => {
                if (!twoDigitRegex.test(e.target.value)) {
                  toast('O campo Mês Vencimento Cartão deve receber de 1 a 2 números e não iniciar com zero')
                } else if (ifBeginsWithZero.test(e.target.value)) {
                  toast('Caso o mês de vencimento inicie com ZERO, remova o zero e coloque SOMENTE o segundo número')
                }
                else {
                  paymentStore.setState('cardExpMonth', parseInt(e.target.value))
                }
              }}
            />
          </div>
          <div className="payment-textfield-container">
            <label htmlFor="cardExpYear">Ano de Vencimento do Cartão*</label>
            <TextField
              id="cardExpYear"
              type="number"
              size="small"
              placeholder="Dois Dígitos"
              required
              value={paymentStore.state.cardExpYear}
              onChange={(e) => {
                if (!twoDigitRegex.test(e.target.value)) {
                  toast('O campo Ano Vencimento Cartão deve receber de 1 a 2 números e não iniciar com zero')
                } else {
                  paymentStore.setState('cardExpYear', e.target.value)
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
              onChange={(e) => {
                if (dashRegex.test(e.target.value)) {
                  toast('Preencha o número do cartão somente com números, sem traços " - "')
                } else if (e.target.value.length > 17) {
                  toast('O número do cartão é inválido')
                } else {
                  paymentStore.setState('cardNumber', e.target.value)
                }
              }}
            />
          </div>
          <div className="payment-textfield-container">
            <label htmlFor="cardCVC">CVC (Código de segurança de 3 dígitos)*</label>
            <TextField
              id="cardCVC"
              type="text"
              size="small"
              placeholder="Três Números"
              required
              value={paymentStore.state.cardCVC}
              onChange={(e) => {
                if (!threeDigitRegex.test(e.target.value)) {
                  toast('O CVC deve possuir somente 3 números.')
                }
                paymentStore.setState('cardCVC', e.target.value)
              }}
            />
          </div>
          <LoadingButton
            variant="contained"
            loading={paymentStore.loading}
            onClick={createSubscription}
            sx={{ width: "80%" }} >Concluir Inscrição</LoadingButton>
        </form>
      </div>
    </>
  );
}
)

export default PaymentForm