import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import HomePageImage from '../../assets/img-sec-contribuicao.png'
import TeamImagem from '../../assets/our-team-img.svg'
import AppBarNavigation from '../../components/general/appbar'
import StyledButton from '../../components/general/button'
import Footer from '../../components/general/footer'
import './style.css'
import BoxJobs from '../jobs/components/box'
import { mockJobs } from '../../utils/mockJobs'
import { useScreenSize } from 'react-screen-size-helper'
import { breakpoints } from '../../utils/breakpoints'
import { Box, Divider, Modal, Stack, TextField, Typography, Button } from '@mui/material'
import { getToken } from '../../utils/getToken'
import UserController from '../../controller/userController'


const HomePage = () => {
  const controller = new UserController()
  const navigate = useNavigate()

  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState()
  const [notificationPermited, setNotificationPermited] = useState()

  let token = getToken()

  useEffect(() => {
    let alreadyShowed = localStorage.getItem('@already-showed')
    const popupShown = localStorage.getItem('popupShown');
    if (popupShown === null && alreadyShowed === null) {
      setShowPopup(true)
      localStorage.setItem('@already-showed', true)
    } else {
      localStorage.setItem('popupShown', false)
    }

  }, []);


  const closePopup = () => {
    localStorage.removeItem('popupShown')
    setShowPopup(false);
  };


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'var(--blue-scale-300)',
    borderRadius: 2,
    boxShadow: 2,
    p: 4,
  };


  return (
    <React.Fragment>
      <AppBarNavigation />
      <div className="container-header-homepage">
        <div className="left-container-head-home-page">
          <h2>
            Programador Junior
          </h2>
          <small className="left-container-span-text">
            Encontre vagas para Frontend, Backend e Fullstack <br /> trabalhe Remoto, híbrido ou presencialmente. <br />
          </small>
          <br />
          <StyledButton
            text={'Ver as Vagas 👆'}
            handleClick={() => {
              navigate('/jobs')
            }}
          />
        </div>
        <img className='floating-image' src={HomePageImage} alt="Imagem casal sentado mexendo no computador" width={300} />
      </div>

      <div className='home-page-middle-text'>
        <h3> Nós otimizamos o seu tempo 🙅‍♀️</h3>
        <p>Chega de buscar de site em site!</p>
        <img className='floating-image' src={TeamImagem} alt="Imagem para times" width={300} />
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
        <StyledButton
          text={'Ver Planos 💼'}
          handleClick={() => navigate('/plans', { replace: true })}
        />
      </div>

      <Footer />
      <Modal
        open={showPopup}
        onClose={closePopup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack spacing={2} sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontFamily={'Montserrat'}
            fontWeight={500}>
            👋 Receba Vagas para Iniciantes <br />
          </Typography>
          <Typography variant='body2' fontFamily={'Montserrat'}>
            Vagas Remotas, Presenciais, Híbridas
          </Typography>
          <TextField
            variant='filled'
            label='Email'
            size='small'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant='contained'
            onClick={() => controller.newsLetterRegister(email, closePopup)}
          >
            Quero Receber!
          </Button>
          <Button
            variant='outlined'
            onClick={closePopup}
            sx={{ color: '#fff' }}>
            Fechar
          </Button>
        </Stack>
      </Modal>
    </React.Fragment>
  )
}

export default HomePage
