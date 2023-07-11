import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import HomePageImage from '../../assets/img-sec-contribuicao.png'
import AppBarNavigation from '../../components/general/appbar'
import Button from '../../components/general/button'
import Footer from '../../components/general/footer'
import JobsController from '../../controller/jobsController'
import RootStoreContext from '../../store/rootStore'
import './style.css'

const HomePage = () => {
  const { jobsStore } = useContext(RootStoreContext)
  const controller = new JobsController(jobsStore)
  const navigate = useNavigate()

  const fetchList = async () => {
    await controller.getAllJobs()
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <React.Fragment>
      <AppBarNavigation />
      <div className="container-header-homepage">
        <div className="left-container-head-home-page">
          <h2>
            Estagiários e Juniors da área Tech, <br />
          </h2>
          <span className="left-container-span-text">
            Encontre as melhores vagas em nossa plataforma
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
        <Button
          text={'Ver Vagas'}
          handleClick={() => {
            navigate('/jobs')
          }}
        />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default HomePage
