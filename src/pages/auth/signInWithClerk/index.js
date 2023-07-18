import './style.css'
import { FormControlLabel, IconButton, InputAdornment, TextField } from '@mui/material'
import { ArrowBack, Visibility, VisibilityOff } from '@mui/icons-material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useNavigate } from 'react-router-dom'
import AppBarNavigation from '../../../components/general/appbar'
import Button from '../../../components/general/button'
import Input from '../../../components/general/input'
import { useContext, useState } from 'react'
import UserController from '../../../controller/userController'
import RootStoreContext from '../../../store/rootStore'
import { observer } from 'mobx-react-lite'

const SignInPage = observer(() => {
  const { userStore } = useContext(RootStoreContext)
  const controller = new UserController(userStore)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    let body = { email, password }
    controller.userLogin(body)
  }

  return (
    <>
      <AppBarNavigation />
      <div className='container-signin'>
        <h3 className='login-title'>Login de Usuário</h3>
        <small className='login-text-description'>Entre com seu usuário e senha cadastrados</small>
        <small className='login-text-description'>e tenha acesso as melhores vagas para iniciantes</small>
        <div className='small-input-box'>
          <small>Email</small>
          <TextField
            variant='outlined'
            size='small'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: '100%', mb: 1 }} />
          <small>Senha</small>
          <TextField
            variant='outlined'
            type={showPassword ? 'text' : 'password'}
            value={password}
            size='small'
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment:
                <InputAdornment position="end"
                  onClick={handleClickShowPassword}
                  sx={{ cursor: 'pointer' }}>
                  {showPassword ?
                    <VisibilityOff sx={{ color: 'var(--blue-scale-300)' }} /> :
                    <Visibility sx={{ color: 'var(--blue-scale-300)' }} />}
                </InputAdornment>
            }}
            sx={{ width: '100%', mb: 2 }} />
          <LoadingButton variant='contained'
            loading={userStore.loading}
            onClick={handleLogin}
            sx={{ width: '100%', backgroundColor: 'var(--blue-scale-300)' }}>
            Entrar
          </LoadingButton>
        </div>
      </div>
      {/* <SignIn
        appearance={{
          baseTheme: neobrutalism,
          layout: {
            showOptionalFields: true,
            socialButtonsVariant: 'iconButton'
          },
          elements: {
            'cl- formFieldInput': {
              height: '50px'
            }
          },
          variables: {
            fontFamily: 'montserrat',
            spacingUnit: '12px'
          }
        }}
        redirectUrl={'/plans'}
        afterSignInUrl={'/plans'}
        signUpUrl={'/signup'}
      /> */}
    </>
  )
}
)

export default SignInPage