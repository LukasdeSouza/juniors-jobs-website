import React, { useContext } from 'react'

import RootStoreContext from '../../../store/rootStore'

import { AppBar, Link, Stack } from '@mui/material'

import Logo from '../../../assets/new-design-logo.svg'

import '../../../styles/global.css'

const AppBarNavigation = () => {

  const { userStore } = useContext(RootStoreContext)

  return (
    <AppBar
      elevation={"none"}
      sx={{
        position: "static",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginTop: 2,
        backgroundColor: 'transparent',
      }}
    >
      <img src={Logo} alt="Logo" style={{ width: '70px', marginLeft: '91px', marginRight: '91px' }} />
      <Stack flexDirection={"row"} alignItems={"center"}>
        <Link
          href="/"
          underline="hover"
          color={'var(--white-scale-200)'}
          fontSize={14}
          fontWeight={600}
          ml={2}
          mr={2}
        >  Anunciar Vaga
        </Link>
        <Link
          href="/"
          underline="hover"
          color={'var(--white-scale-400)'}
          fontSize={14}
          ml={2}
          mr={2}
        > Nossa Equipe
        </Link>
        <Link
          href="/"
          underline="hover"
          color={'var(--white-scale-400)'}
          fontSize={14}
          ml={2}
          mr={2}
        >  Cadastrar CV
        </Link>
        <Link
          href="/"
          underline="hover"
          color={'var(--white-scale-400)'}
          fontSize={14}
          ml={2}
          mr={2}
        >
          Vagas
        </Link>
        {localStorage.getItem('token') === null
          &&
          <Link
            href="/login"
            underline="hover"
            color={"#5e5ff0"}
            fontSize={14}
            ml={2}
            mr={2}
          >
            Login
          </Link>
        }
        <Link
          href="/"
          underline="hover"
          color={'var(--white-scale-400)'}
          fontSize={14}
          ml={2}
          mr={2}
        >
          Perfil
        </Link>
      </Stack>
    </AppBar>
  );
}

export default AppBarNavigation

