import {
  AppBar,
  Backdrop,
  CircularProgress,
  Link,
  Stack,
  Tooltip
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import Logo from '../../../assets/new-design-logo.svg'
import '../../../styles/global.css'
import { getToken } from '../../../utils/getToken'
import { useContext } from 'react'
import RootStoreContext from '../../../store/rootStore'
import { observer } from 'mobx-react-lite'
import { toast } from 'react-hot-toast'

const AppBarNavigation = observer(() => {
  const { mainStore } = useContext(RootStoreContext)

  const navigate = useNavigate()

  const onClickLogout = () => {
    mainStore.setState('open', true)
    localStorage.clear();
    setTimeout(() => {
      mainStore.setState('open', false)
      toast.success('Logout realizado com Sucesso!')
      navigate('/', { replace: true })
    }, 1250)
  }

  const token = getToken()

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: 1,
          background: 'transparent'
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          onClick={() => navigate('/')}
          style={{
            width: '70px',
            marginLeft: '16px',
            cursor: 'pointer'
          }}
        />
        <Stack alignItems={'center'} justifyContent={'space-between'}>
          <Stack direction={'row'}>
            <Tooltip title={'Voltar para página Inicial'}>
              <Link
                href="/"
                underline="hover"
                color={'var(--white-scale-200)'}
                fontSize={14}
                ml={2}
                mr={2}
              >
                Home
              </Link>
            </Tooltip>

            <Tooltip title="Veja nossas Vagas">
              <Link
                href="/jobs"
                underline="hover"
                color={'var(--white-scale-200)'}
                fontSize={14}
                ml={2}
                mr={2}
              >
                Vagas
              </Link>
            </Tooltip>
            <Tooltip title={'Veja os nossos planos'}>
              <Link
                href="/plans"
                underline="hover"
                color={'var(--white-scale-200)'}
                fontSize={14}
                ml={2}
                mr={2}
              >
                {' '}
                Planos
              </Link>
            </Tooltip>
            <Tooltip title={'A galera que fez essa idéia acontecer!'}>
              <Link
                href="/our-team"
                underline="hover"
                color={'var(--white-scale-200)'}
                fontSize={14}
                ml={2}
                mr={2}
              >
                {' '}
                Nossa Equipe
              </Link>
            </Tooltip>
          </Stack>
        </Stack>
        {token === null ?
          <Stack direction={'row'} alignItems={'center'}>
            <Link
              href='/auth/register'
              underline="hover"
              fontSize={14}
              color={'var(--white-scale-200)'}>
              Criar Conta
            </Link>
            <Link
              href='/auth/login'
              underline="hover"
              fontSize={14}
              color={'var(--white-scale-200)'}
              sx={{ mx: 4 }}>
              Login
            </Link>
          </Stack> :
          <Tooltip title='Sair da sua conta'>
            <Link
              underline="hover"
              fontSize={14}
              color={'var(--white-scale-200)'}
              onClick={onClickLogout}
              sx={{ mx: 4, cursor: 'pointer' }}
            >
              Sair
            </Link>
          </Tooltip>
        }
      </AppBar>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={mainStore.state.open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}
)

export default AppBarNavigation
