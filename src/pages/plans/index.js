import { useNavigate } from 'react-router-dom'
import Button from '../../components/general/button'
import './style.css'

const PlansPage = () => {
  const navigate = useNavigate()

  const navigateBack = () => {
    navigate('/jobs', { replace: true })
  }

  return (
    <div className="container-plans-page">
      <h2>Relax! We are Under Construction 🏗️</h2>
      <Button handleClick={() => navigateBack()} text={'Voltar para Vagas'} />
    </div>
  )
}

export default PlansPage
