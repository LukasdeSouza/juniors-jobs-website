import { useContext, useState } from 'react'

import { Container, Stack, TextField, Typography } from '@mui/material'

import '../../../styles/global.css'

import LoginImg from '../../../assets/img-sec-login.svg'

import { observer } from 'mobx-react-lite'
import UserController from '../../../controller/userController'
import RootStoreContext from '../../../store/rootStore'

import { LoadingButton } from '@mui/lab'
import { useNavigate } from 'react-router-dom'

const LoginPage = observer(() => {
  const navigate = useNavigate()
  const { userStore } = useContext(RootStoreContext)
  const controller = new UserController(userStore)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const doLogin = async () => {
    const body = {
      email,
      password
    }
    await controller.userLogin(body)
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: 522,
        width: '50vw',
        backgroundColor: '#FFFF',
        boxShadow: 'var(--bs-shadow-300)',
        borderRadius: 3,
        mt: 6
      }}
    >
      <Stack
        alignItems={'center'}
        justifyContent={'center'}
        sx={{ ml: -9, width: '60%' }}
      >
        <img
          src={LoginImg}
          alt=""
          style={{ width: '239px', height: '300px' }}
        />
      </Stack>
      <Stack
        alignItems={'center'}
        mt={8}
        sx={{ ml: 2, width: '50%', backgroundColor: 'var(--white-scale-100)' }}
      >
        <Typography
          fontFamily={'Montserrat'}
          fontWeight={700}
          fontSize={24}
          color={'#272727'}
        >
          Olá, Bem Vindo
        </Typography>
        <Typography
          fontFamily={'Montserrat'}
          textAlign={'center'}
          fontWeight={500}
          fontSize={14}
          color={'#272727'}
        >
          Seek Jobs é a maneira mais fácil de encontrar seu emprego Tech
        </Typography>
        <TextField
          label="Email"
          size="small"
          required
          sx={{ width: '90%', mt: 4 }}
          onChange={(event) => setEmail(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              doLogin()
            }
          }}
        />
        <TextField
          label="Senha"
          size="small"
          type="password"
          required
          sx={{ width: '90%', mt: 2 }}
          onChange={(event) => setPassword(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              doLogin()
            }
          }}
        />
        <LoadingButton
          loading={userStore.loading}
          variant="outlined"
          sx={{
            textTransform: 'none',
            fontFamily: 'Montserrat',
            width: '90%',
            mt: 3
          }}
          onClick={() => navigate('/auth/register')}
        >
          Cadastre-se
        </LoadingButton>
        <LoadingButton
          loading={userStore.loading}
          variant="contained"
          sx={{
            backgroundColor: 'var(--blue-scale-300)',
            textTransform: 'capitalize',
            fontFamily: 'Montserrat',
            width: '90%'
          }}
          onClick={doLogin}
        >
          Entrar
        </LoadingButton>
        <Typography
          fontFamily={'Montserrat'}
          fontSize={11}
          color={'var(--blue-scale-300)'}
          mt={3}
          sx={{ cursor: 'pointer' }}
        >
          Esqueceu a senha?
        </Typography>
      </Stack>
    </Container>
  )
})

export default LoginPage
