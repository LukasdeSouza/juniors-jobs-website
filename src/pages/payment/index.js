import { useNavigate } from 'react-router-dom'
import Button from '../../components/general/button'
import './style.css'

const PaymentPage = () => {
  const navigate = useNavigate()

  const navigateBack = () => {
    navigate('/jobs', { replace: true })
  }

  return (
    <div className="container-payment-page">
      <h2>payment page coming soon...</h2>
      <p>We are under Construction 🏗️</p>
      <Button text={'Voltar para Vagas'} handleClick={navigateBack} />
    </div>
  )
}

export default PaymentPage
