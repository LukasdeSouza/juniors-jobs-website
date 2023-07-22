import { Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AppBarNavigation from '../../components/general/appbar'
import Button from '../../components/general/button'
import './style.css'
import { useContext } from 'react'
import RootStoreContext from '../../store/rootStore'


const PlansPage = () => {
  const { paymentStore } = useContext(RootStoreContext)

  const navigate = useNavigate()

  const navigateToCheckout = () => {
    navigate('/checkout')
  }

  const navigateToPlan = (e) => {
    let priceId
    const textContentPlan = e.target.textContent
    if (textContentPlan.includes('Básico')) {
      priceId = process.env.STRIPE_PRICE_ID_BASIC

    } else if (textContentPlan.includes('Recommended')) {
      priceId = process.env.STRIPE_PRICE_ID_RECOMMENDED

    } else {
      priceId = process.env.STRIPE_PRICE_ID_PREMIUM
    }
    paymentStore.setState('priceId', priceId)
    navigateToCheckout()
  }

  return (
    <>
      <AppBarNavigation />
      <div className="container-plans-page">
        <h2>Escolha o seu Plano de Assinatura</h2>
        <p>
          Selecione aquele que vai complementar melhor a sua carreira e te
          trazer mais oportunidades
        </p>
        <div className="flex-container-plan-card">
          <div className="container-plan-card">
            <p>Plano Básico - 1 Mês</p>
            <Link underline="none" sx={{ fontSize: 30, fontWeight: 700 }}>
              R$ 15
            </Link>
            <small className="small-text-cents-description">
              R$ 0.50 centavos por dia
            </small>
            <br />
            <small className="small-text-description">
              - Tenha acesso por 1 mês as melhores vagas para iniciantes na área
              da tecnologia, vagas nacionais e internacionais atualizadas
              constantemente
            </small>
            <Button
              text={'Assinar Plano Básico'}
              handleClick={(e) => navigateToPlan(e)}
            />
          </div>
          <div className="container-plan-card-recommended">
            <p>Plano Medium - 3 Meses</p>
            <Link underline="none" sx={{ fontSize: 30, fontWeight: 700 }}>
              R$ 30
            </Link>
            <small className="small-text-cents-description">
              R$ 1.00 por dia
            </small>
            <br />
            <small className="small-text-description">
              - Tenha acesso por 3 meses as melhores vagas para iniciantes na
              área da tecnologia, vagas nacionais e internacionais atualizadas
              constantemente.
            </small>
            <small className="small-text-description">
              - Receba dicas de como se destacar em cada vaga, afim de aprimorar
              as suas chances de sucesso.
            </small>

            <Button
              text={'Assinar Plano Recommended'}
              handleClick={navigateToPlan}
            />
          </div>
          <div className="container-plan-card-premium">
            <p>Plano Premium - 6 Meses</p>
            <Link underline="none" sx={{ fontSize: 30, fontWeight: 700 }}>
              R$ 69
            </Link>
            <small className="small-text-cents-description">
              R$ 2.96 centavos por dia
            </small>
            <br />
            <small className="small-text-description">
              - Tenha acesso por 6 meses as melhores vagas para iniciantes na
              área da tecnologia, vagas nacionais e internacionais atualizadas
              constantemente
            </small>
            <small className="small-text-description">
              - Receba dicas de como se destacar em cada vaga, afim de aprimorar
              as suas chances de sucesso.
            </small>
            <small className="small-text-description">
              - Tenha acesso permanente a comunidade, faça networking,
              compartilhe e receba conhecimento, aprenda inglês, escreva linhas
              de código, e muito mais. Tudo isso com o conteúdo da comunidade.
            </small>
            <small className="small-text-description">
              - Aprenda a ter um currículo e Linkedin que atraia a atenção dos
              recrutadores.
            </small>
            <Button
              text={'Assinar Plano Premium'}
              handleClick={navigateToPlan}
            />
          </div>
        </div>
        <Link href="/jobs" sx={{ color: 'var(--white-scale-300)' }}>
          Voltar para as Vagas
        </Link>
      </div>
    </>
  )
}

export default PlansPage
