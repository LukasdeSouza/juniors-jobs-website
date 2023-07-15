import { useNavigate } from 'react-router-dom'
import AppBarNavigation from '../../components/general/appbar'
import Button from '../../components/general/button'
import './style.css'

const Page404 = () => {
  const navigate = useNavigate()

  return (
    <div>
      <AppBarNavigation />
      <div className="main-content-404page">
        <h1>ERROR 404</h1>
        <p>
          Desculpe! Não conseguimos encontrar a página que você estava
          procurando
        </p>
        <a href="/">
          <Button
            text={'Voltar para Vagas'}
            handleClick={() => navigate('/jobs')}
          />
        </a>
      </div>
    </div>
  )
}

export default Page404
