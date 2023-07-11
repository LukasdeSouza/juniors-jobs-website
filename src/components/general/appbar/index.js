import {
  AppBar,
  Avatar,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { useAuth, useUser } from '@clerk/clerk-react'
import { useState } from 'react'
import Logo from '../../../assets/new-design-logo.svg'
import '../../../styles/global.css'

const AppBarNavigation = () => {
  const navigate = useNavigate()
  const { isSignedIn } = useAuth()
  const { user } = useUser()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  console.log(user)

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
          marginLeft: '91px',
          marginRight: '91px',
          cursor: 'pointer'
        }}
      />
      <Stack alignItems={'center'} justifyContent={'space-between'}>
        <Stack direction={'row'}>
          <Link
            href="/"
            underline="hover"
            color={'var(--white-scale-300)'}
            fontSize={14}
            ml={2}
            mr={2}
          >
            Home
          </Link>
          <Link
            href="/jobs"
            underline="hover"
            color={'var(--white-scale-300)'}
            fontSize={14}
            ml={2}
            mr={2}
          >
            Vagas
          </Link>
          {/* <Link
            href="/register-jobs"
            underline="hover"
            color={'var(--white-scale-300)'}
            fontSize={14}
            ml={2}
            mr={2}
          >
            Anunciar Vaga
          </Link> */}
          <Link
            href="/our-team"
            underline="hover"
            color={'var(--white-scale-300)'}
            fontSize={14}
            ml={2}
            mr={2}
          >
            {' '}
            Nossa Equipe
          </Link>
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
        {isSignedIn === false ? (
          <Link
            href="/login"
            underline="hover"
            color={'var(--white-scale-400)'}
            fontSize={14}
            ml={2}
            mr={2}
          >
            Login
          </Link>
        ) : (
          <Stack direction={'inherit'} sx={{ alignItems: 'center' }}>
            <Typography>{user?.firstName}</Typography>
            <Avatar
              src={user?.imageUrl}
              onClick={handleClick}
              sx={{ cursor: 'pointer', mx: 2 }}
            />
          </Stack>
        )}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
        >
          <MenuItem onClick={handleClose}>Sair</MenuItem>
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
