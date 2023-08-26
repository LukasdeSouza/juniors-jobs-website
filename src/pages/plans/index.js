import { Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AppBarNavigation from '../../components/general/appbar'
import Button from '../../components/general/button'
import './style.css'
import { useContext } from 'react'
import RootStoreContext from '../../store/rootStore'
import { observer } from 'mobx-react-lite'
import { useScreenSize } from 'react-screen-size-helper'
import { breakpoints } from '../../utils/breakpoints'


const PlansPage = observer(() => {
  const { paymentStore } = useContext(RootStoreContext)
  const { isMobile, isTablet, isDesktop } = useScreenSize({ breakpoints })


  const navigate = useNavigate()

  const navigateToCheckout = () => {
    navigate('/checkout')
  }

  const navigateToPlan = (e) => {
    let priceId = ''
    const textContentPlan = e.target.textContent
    if (textContentPlan.includes('Basic')) {
      priceId = 'price_1NjOyDHC03jpzXbswPj50SbI'

    } else if (textContentPlan.includes('Recommended')) {
      priceId = 'price_1NfUrFHC03jpzXbsmh1XvXSW'

    } else {
      priceId = 'price_1NfUsFHC03jpzXbsdyuZpW6X'
    }
    paymentStore.setState('priceId', priceId)
    paymentStore.setState('planName', textContentPlan)
    navigateToCheckout()
  }

  return (
    <>
      <AppBarNavigation />
      <div className="container-plans-page">
        <h2>Mais barato que o seu Streaming Favorito</h2>
        <p>
          Selecione o plano que vai complementar melhor a sua carreira e te
          trazer mais oportunidades
        </p>
        {isMobile || isTablet ?
          <div className="flex-container-plan-card-mobile">
            <div className="container-plan-card">
              <p>Plano Básico - 1 Mês</p>
              <Link underline="none" sx={{ fontSize: 30, fontWeight: 700 }}>
                R$ 7
              </Link>
              <small className="small-text-cents-description">
                R$ 0.23 centavos por dia
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
                R$ 20
              </Link>
              <small className="small-text-cents-description">
                R$ 0.66 por dia
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
                R$ 42
              </Link>
              <small className="small-text-cents-description">
                R$ 1.40 por dia
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
          :
          <div className="flex-container-plan-card">
            <div className="container-plan-card">
              <p>Plano Básico - 1 Mês</p>
              <Link underline="none" sx={{ fontSize: 30, fontWeight: 700 }}>
                R$ 5
              </Link>
              <small className="small-text-cents-description">
                R$ 0.16 centavos por dia
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
                R$ 12
              </Link>
              <small className="small-text-cents-description">
                R$ 0.40 por dia
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
                R$ 24
              </Link>
              <small className="small-text-cents-description">
                R$ 1.25 centavos por dia
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
        }

        <Link href="/jobs" sx={{ color: 'var(--white-scale-300)' }}>
          Voltar para as Vagas
        </Link>
      </div>
    </>
  )
}
)

export default PlansPage
