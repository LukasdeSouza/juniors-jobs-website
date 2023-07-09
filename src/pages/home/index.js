import React from 'react'
import { useNavigate } from 'react-router'
import HomePageImage from '../../assets/img-sec-contribuicao.png'
import AppBarNavigation from '../../components/general/appbar'
import Button from '../../components/general/button'
import Footer from '../../components/general/footer'
import './style.css'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <AppBarNavigation />
      <div className="container-header-homepage">
        <div className="left-container-head-home-page">
          <h2>
            Encontre Vagas para Iniciantes <br /> na área Tech!
          </h2>
          <span className="left-container-span-text">
            Nunca foi tão fácil encontrar estágios e vagas para juniores
          </span>
          <Button
            text={'Ver Vagas'}
            handleClick={() => {
              navigate('/jobs')
            }}
          />
        </div>
        <img src={HomePageImage} alt="" width={300} />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default HomePage
