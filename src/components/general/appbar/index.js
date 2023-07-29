import {
  AppBar,
  Avatar,
  Link,
  Menu,
  MenuItem,
  Stack,
  Tooltip
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import Logo from '../../../assets/new-design-logo.svg'
import '../../../styles/global.css'

const AppBarNavigation = () => {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    localStorage.setItem('clerk-db-jwt', {})
    window.location.reload()
    setAnchorEl(null)
  }

  return (
    <AppBar
      elevation={0}
      sx={{
        position: 'static',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 2,
        backgroundColor: 'transparent'
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
      {/* <Link
          href="/register-cv"
          underline="hover"
          color={'var(--white-scale-400)'}
          fontSize={14}
          ml={2}
          mr={2}
        >  Cadastrar CV
        </Link> */}
      <Stack direction={'row'} mx={2}>
        {/* {isSignedIn ? (
          <Tooltip title={'⚙️ Em breve, configurações de Usuário'}>
            <Stack direction={'inherit'} sx={{ alignItems: 'center' }}>
              <Link
                sx={{
                  color: 'var(--white-scale-200)'
                }}
              >
                {user?.firstName}
              </Link>
              <Avatar
                src={user?.imageUrl}
                onClick={handleClick}
                sx={{ cursor: 'pointer', mx: 2 }}
              />
            </Stack>
          </Tooltip>
        ) : (
          <Link
            href="/signin"
            underline="hover"
            color={'var(--white-scale-200)'}
            fontSize={14}
            ml={2}
            mr={2}
          >
            Login
          </Link>
        )} */}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link underline="none">Sair (Logout)</Link>
          </MenuItem>
        </Menu>
      </Stack>
      {/* <Link
          href="/"
          underline="hover"
          color={'var(--white-scale-400)'}
          fontSize={14}
          ml={2}
          mr={2}
        >
          Perfil
        </Link> */}
    </AppBar>
  )
}

export default AppBarNavigation
