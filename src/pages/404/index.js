import AppBarNavigation from '../../components/general/appbar'
import './style.css'

const Page404 = () => {
  return (
    <div>
      <AppBarNavigation />
      <div className='main-content-404page'>
        <h1>ERROR 404</h1>
        <p>Desculpe! Não conseguimos encontrar a página que você estava procurando</p>
        <a href="/">
          <button>Voltar para página de Vagas </button>
        </a>
      </div>
    </div>
  )
}

export default Page404