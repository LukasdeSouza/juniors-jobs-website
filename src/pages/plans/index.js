import { Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/general/button'
import './style.css'

const PlansPage = () => {
  const navigate = useNavigate()

  const navigateBack = () => {
    navigate('/jobs', { replace: true })
  }

  const navigateToPaymentPage = () => {
    navigate('/payment')
  }

  return (
    <div className="container-plans-page">
      <h2>This is the Plans page!</h2>
      <p>Relax! We are Under Construction 🏗️</p>
      <div className="flex-container-plan-card">
        <div className="container-plan-card">
          <p>Plano Básico - 1 Mês</p>
          <Link sx={{ fontSize: 30 }}>R$ 10</Link>
          <Button
            text={'Assinar Plano Básico'}
            handleClick={navigateToPaymentPage}
          />
        </div>
        <div className="container-plan-card">
          <p>Plano Medium - 3 Meses</p>
          <Link sx={{ fontSize: 30 }}>R$ 29,97</Link>
          <Button
            text={'Assinar plano Medium'}
            handleClick={navigateToPaymentPage}
          />
        </div>
        <div className="container-plan-card">
          <p>Plano Premium - 1 Ano</p>
          <Link sx={{ fontSize: 30 }}>R$ 69,99</Link>
          <Button
            text={'Assinar plano Premium'}
            handleClick={navigateToPaymentPage}
          />
        </div>
      </div>
      <Button handleClick={() => navigateBack()} text={'Voltar para Vagas'} />
    </div>
  )
}

export default PlansPage
