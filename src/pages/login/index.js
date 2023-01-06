import React, { useContext, useEffect, useState } from 'react'

import { Alert, Button, Container, Stack, TextField, Typography } from '@mui/material'

import '../../styles/global.css'

import LoginImg from '../../assets/img-sec-login.svg'
import IconGoogle from '../../assets/icon-google.svg'

import UserController from '../../controller/userController'
import RootStoreContext from '../../store/rootStore'
import { observer } from 'mobx-react-lite'

const LoginPage = observer(() => {

  const { userStore } = useContext(RootStoreContext)
  const controller = new UserController(userStore)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const doLogin = () => {
    const body = {
      email: email,
      password: password
    }
    controller.userLogin(body)
    setEmail('')
    setPassword('')
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        height: 522,
        width: 788,
        boxShadow: "var(--bs-shadow-300)",
        mt: 6
      }}>
      <Stack alignItems={'center'} sx={{ ml: -3, width: 494, backgroundColor: "var(--blue-scale-400)" }}>
        <Typography fontFamily={'Montserrat'} fontSize={22} color={"var(--white-scale-100)"} mt={8}>
          Seek Jobs, todas as <br /> Vagas Tech
        </Typography>
        <img src={LoginImg} alt="" width={250} style={{ marginTop: 32 }} />
      </Stack>
      <Stack alignItems={'center'} mt={8} sx={{ mr: 0, width: 494, backgroundColor: "var(--white-scale-100)" }}>
        {userStore.alert.open &&
          <Alert severity={userStore.alert.type}
            onClose={() => userStore.setAlert(false)}
            sx={{ position: 'absolute' }}>{userStore.alert.message}</Alert>
        }
        <Typography fontFamily={'Montserrat'} fontWeight={700} fontSize={24}>
          Acesse sua Conta
        </Typography>
        <TextField label='Email' size='small'
          required
          sx={{ width: 320, mt: 4 }}
          onChange={(event) => setEmail(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              doLogin()
            }
          }} />
        <TextField label='Senha' size='small' type='password'
          required
          sx={{ width: 320, mt: 2 }}
          onChange={(event) => setPassword(event.target.value)} />
        <Typography fontFamily={'Montserrat'}
          fontSize={12}
          color={"var(--blue-scale-300)"}
          mt={1}
          sx={{ cursor: "pointer" }}>
          Esqueceu a senha?
        </Typography>
        <Button variant='contained'
          sx={{
            width: 320, backgroundColor: "var(--blue-scale-300)",
            textTransform: "capitalize", fontFamily: "Montserrat", mt: 4
          }}
          onClick={doLogin}>
          Entrar
        </Button>
        <Typography mt={4}>Ou</Typography>
        <Stack
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={"center"}
          height={36}
          width={320}
          mt={4}
          border={'1px solid black'} borderRadius={4}
          sx={{ cursor: 'pointer' }}>
          <img src={IconGoogle} alt="Google Logo" width={24} style={{ marginRight: 16 }} />
          <Typography fontFamily={'Montserrat'} fontSize={12}>
            Continuar com Google
          </Typography>
        </Stack>
        <Typography fontFamily={'Montserrat'} fontSize={12} mt={4}>
          Não tem Login?
          <b style={{ color: "var(--blue-scale-300)", cursor: 'pointer' }}> Cadastre-se</b></Typography>
      </Stack>
    </Container >
  )
}
)

export default LoginPage