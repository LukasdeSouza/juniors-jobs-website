import React from 'react'
import { useNavigate } from 'react-router'
import HomePageImage from '../../assets/img-sec-contribuicao.png'
import AppBarNavigation from '../../components/general/appbar'
import Button from '../../components/general/button'
import Footer from '../../components/general/footer'
import './style.css'
import BoxJobs from '../jobs/components/box'
import { mockJobs } from '../../utils/mockJobs'


const HomePage = () => {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <AppBarNavigation />
      <div className="container-header-homepage">
        <div className="left-container-head-home-page">
          <h2>
            Nunca foi tão fácil encontrar <br />
            Vagas para Júniors e Estagiários na área Tech
          </h2>
          <span className="left-container-span-text">
            Reunimos diversas vagas de diferentes plataformas em um só lugar. <br />
            Chega de vasculhar site por site, ou ter que filtrar vagas que encaixem em um perfil iniciante
          </span>
          <br />
          <Button
            text={'Quero ver as vagas'}
            handleClick={() => {
              navigate('/auth/login')
            }}
          />
        </div>
        <img src={HomePageImage} alt="" width={300} />
      </div>
      <div className="container-description-text">
        <h3
          style={{
            textAlign: 'center',
            color: 'var(--white-scale-300)'
          }}
        >
          A primeira plataforma brasileira a reunir vagas para iniciantes e
          estagiários, <br /> da área de tecnologia, em um só lugar
        </h3>
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
      <Footer />
    </React.Fragment>
  )
}

export default HomePage
