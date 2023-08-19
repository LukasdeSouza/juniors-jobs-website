import { Link } from '@mui/material'
import CongratsAnimation from '../../assets/animation_lk4dtaq3_small.gif'
import './style.css'

const BuyedSuccessfullyPage = () => {
  return (
    <div className="container-congratulations">
      <h2>🎉 Boa!</h2>
      <p>
        Obrigado por assinar a plataforma. Volte para a página de Vagas para desfrutar do seu acesso!
      </p>
      <div className="container-congratulations-image">
        <img src={CongratsAnimation} alt="Imagem de Parabéns" />
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
