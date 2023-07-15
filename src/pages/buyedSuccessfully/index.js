import { Link } from '@mui/material'
import CongratsAnimation from '../../assets/animation_lk4dtaq3_small.gif'
import './style.css'

const BuyedSuccessfullyPage = () => {
  return (
    <div className="container-congratulations">
      <h2>Boa!</h2>
      <p>
        Até o final do dia o seu acesso integral a plataforma será liberado,
        belê?
      </p>
      <div className="container-congratulations-image">
        <img src={CongratsAnimation} alt="" />
      </div>
      <Link
        href="/jobs"
        style={{ color: 'var(--white-scale-200)', marginTop: '32px' }}
      >
        Quero Voltar as Vagas!
      </Link>
    </div>
  )
}

export default BuyedSuccessfullyPage
