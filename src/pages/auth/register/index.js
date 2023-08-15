import { useScreenSize } from 'react-screen-size-helper'
import RegisterBackground from '../../../components/auth/register/registerBackground'
import RegisterForm from '../../../components/auth/register/registerForm'
import AppBarNavigation from '../../../components/general/appbar'
import { breakpoints } from '../../../utils/breakpoints'
import '../../../styles/utility-classes.css'
import './style.css'
import { Link, Stack } from '@mui/material'
import Input from '../../../components/general/input'
import UserController from '../../../controller/userController'
import { useContext, useState } from 'react'
import RootStoreContext from '../../../store/rootStore'
import { useNavigate } from 'react-router-dom'
import { LoadingButton } from '@mui/lab'

const RegisterUser = () => {
  const { userStore } = useContext(RootStoreContext)
  const controller = new UserController(userStore)
  const { isMobile, isTablet } = useScreenSize({ breakpoints })

  const navigate = useNavigate()

  const [isValid, setIsValid] = useState(false)

  const handleChange = ({ target: { name, value } }) => {
    userStore.setState(name, value)
    validateInputs()
  }

  const navigateCallBack = () => {
    navigate('/plans')
  }

  const registerUser = () => {
    let newUser = {
      name: userStore.state.name,
      email: userStore.state.email,
      password: userStore.state.password,
      confirmpassword: userStore.state.confirmpassword,
    }
    controller.userRegister(newUser, navigateCallBack)
  }

  const validateInputs = () => {
    const emptyField = userStore.state.name.length > 0
    const emailRegex = /[\w\-._]+@[\w\-._]+\.\w{2,10}/
    const minLength = userStore.state.password.length >= 8
    const comparePassword =
      userStore.state.password === userStore.state.confirmpassword
    const status =
      emptyField &&
      emailRegex.test(userStore.state.email) &&
      minLength &&
      comparePassword
    setIsValid(status)
  }


  return (
    <>
      <AppBarNavigation />
      <main className="main-container">
        <div className="register-container my-5">
          {isMobile || isTablet ?
            <Stack
              sx={{
                width: '100%', direction: 'column', alignItems: 'center', justifyContent: 'center'
              }}
            >
              <h3 style={{ color: '#111' }}>👋 Cadastre seu Usuário</h3>
              <small style={{ color: '#333' }}>Crie sua conta e comece a navegar</small>
              <div className="input-container">
                <Input
                  type="text"
                  placeHolder="Nome Completo*"
                  name="name"
                  handleChange={handleChange}
                />
                <Input
                  type="email"
                  placeHolder="Email*"
                  name="email"
                  handleChange={handleChange}
                />
                <Input
                  type="password"
                  placeHolder="Senha*"
                  name="password"
                  handleChange={handleChange}
                />
                <Input
                  type="password"
                  placeHolder="Confirme sua senha"
                  name="confirmpassword"
                  handleChange={handleChange}
                />
              </div>
              <LoadingButton
                loading={userStore.loading}
                variant="contained"
                sx={{ textTransform: 'none', fontFamily: "montserrat", width: '85%' }}
                onClick={() => registerUser()}
              >
                Pronto!
              </LoadingButton>
              <Link underline='hover' href='/auth/login' sx={{ my: 1 }}>Já tem Conta? Fazer Login</Link>
            </Stack>
            :
            <>
              <RegisterBackground />
              <RegisterForm
                handleChange={handleChange}
                validateInputs={validateInputs}
                navigateCallBack={navigateCallBack}
                loading={userStore.loading}
                registerUser={registerUser}
              />
            </>
          }
        </div>
      </main>
    </>
  )
}

export default RegisterUser
