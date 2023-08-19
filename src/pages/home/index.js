import React from 'react'
import { useNavigate } from 'react-router'
import HomePageImage from '../../assets/img-sec-contribuicao.png'
import TeamImagem from '../../assets/our-team-img.svg'
import AppBarNavigation from '../../components/general/appbar'
import Button from '../../components/general/button'
import Footer from '../../components/general/footer'
import './style.css'
import BoxJobs from '../jobs/components/box'
import { mockJobs } from '../../utils/mockJobs'
import { useScreenSize } from 'react-screen-size-helper'
import { breakpoints } from '../../utils/breakpoints'
import { Divider } from '@mui/material'


const HomePage = () => {
  const { isDesktop } = useScreenSize({ breakpoints })

  const navigate = useNavigate()

  return (
    <React.Fragment>
      <AppBarNavigation />
      <div className="container-header-homepage">
        <div className="left-container-head-home-page">
          <h2>
            Vagas de Tecnologia para Iniciantes
          </h2>
          <small className="left-container-span-text">
            Oportunidades para Programadores, <br /> DevOps, Pessoas de Produto, Designers, Suporte técnico, entre outros. <br />
          </small>
          <br />
          <Button
            text={'Ver as Vagas 👆'}
            handleClick={() => {
              navigate('/jobs')
            }}
          />
        </div>
        <img className='floating-image' src={HomePageImage} alt="" width={300} />
      </div>

      <div className='home-page-middle-text'>
        <h3> Nós otimizamos o seu tempo 🙅‍♀️</h3>
        <p>Chega de buscar de site em site!</p>
        <img className='floating-image' src={TeamImagem} alt="" width={300} />
      </div>

      <div className="container-description-text">
        <h3
          style={{
            textAlign: 'center',
            color: 'var(--white-scale-200)'
          }}
        >
          👀 Dá uma olhada: 👇
        </h3>
        <p
          style={{ textAlign: 'center' }}
        >
          Modelo Remoto, Híbrido e Presencial, <br />
          oportunidades <br />
          🚩 Nacionais e 🌍 Internacionais
        </p>
      </div>

      <div className='homepage-container-mock-jobs'>
        {mockJobs.map((job) => (
          <BoxJobs
            img={job.img}
            name={job.name}
            tier={job.tier}
            title={job.title}
            salary={job.salary}
            description={job.description}
            location={job.location}
            type={job.type}
            link={job.link}
          />
        ))}
      </div>
      <div className='call-to-action-home-page'>
        <h3>Tenha acesso a essas e muitas outras vagas através da nossa plataforma.</h3>
        <Button
          text={'Ver Planos 💼'}
          handleClick={() => navigate('/plans', { replace: true })}
        />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default HomePage
