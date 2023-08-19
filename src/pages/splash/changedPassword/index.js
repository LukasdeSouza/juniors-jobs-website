import { useNavigate } from 'react-router-dom'
import Checked from '../../../assets/icon3d-sucess 1.svg'

import './styles.css'

const SplashChangePasswordPage = () => {
  const navigate = useNavigate()

  return (
    <section>
      <div className="splash-screen-container">
        <img src={Checked} alt="Checkbox Imagem" />
        <h3>Senha Alterada com Sucesso</h3>
        <button onClick={() => navigate('/')}>Ir para a página de Vagas</button>
      </div>
    </section>
  )
}

export default SplashChangePasswordPage
