import React from 'react'
import { useNavigate } from 'react-router'
import HomePageImage from '../../assets/img-sec-contribuicao.png'
import AppBarNavigation from '../../components/general/appbar'
import Button from '../../components/general/button'
import Footer from '../../components/general/footer'
import './style.css'
import BoxJobs from '../jobs/components/box'
import { mockJobs } from '../../utils/mockJobs'
import { useScreenSize } from 'react-screen-size-helper'
import { breakpoints } from '../../utils/breakpoints'


const HomePage = () => {
  const { isDesktop } = useScreenSize({ breakpoints })

  const navigate = useNavigate()

  return (
    <React.Fragment>
      <AppBarNavigation />
      <div className="container-header-homepage">
        <div className="left-container-head-home-page">
          <h2>
            Vagas de Tecnologia para Júniors <br /> e Estagiários em um só lugar
          </h2>
          <span className="left-container-span-text">
            Oportunidades para Programadores, DevOps, Pessoas de Produto, Designers, Suporte técnico, entre outros. <br />
          </span>
          <br />
          <Button
            text={'Quero Ver as Vagas 👆'}
            handleClick={() => {
              navigate('/jobs')
            }}
          />
        </div>
        <img src={HomePageImage} alt="" width={300} />
      </div>
      <div className="container-description-text">
        <h3
          style={{
            textAlign: 'center',
            color: 'var(--white-scale-200)'
          }}
        >
          Dê uma olhada em algumas das vagas: 👇
        </h3>
        {isDesktop &&
          <p>Modelo Remoto, Híbrido e Presencial, oportunidades 🚩 Nacionais e 🌍 Internacionais</p>
        }
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
          text={'Ver Planos'}
          handleClick={() => navigate('/plans', { replace: true })}
        />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default HomePage
