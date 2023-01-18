import React, { useContext } from 'react'

import RootStoreContext from '../../../store/rootStore'

import { AppBar, Avatar, Button, Link, Stack } from '@mui/material'

import Logo from '../../../assets/logo_size.jpg'

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
        justifyContent: "space-between",
        maxWidth: '1440',
        width: "100%",
        height: "80px",
        backgroundColor: "#fff",
        boxShadow: "var(--bs-shadow-100)",
      }}
    >
      <img src={Logo} width={"80px"} alt="" />
      {userStore.state._id}
      <Stack flexDirection={"row"} alignItems={"center"}>
        <Link
          href="/"
          underline="hover"
          color={"#5e5ff0"}
          fontSize={14}
          ml={2}
          mr={2}
        >
          Vagas
        </Link>
        {localStorage.getItem('token') === null &&
          <Button variant="contained" href='/register' ml={2}>
            <Link href="/register" underline="hover" color={"#fff"} fontSize={12}>
              Me Cadastrar
            </Link>
          </Button>}
        <Link
          href="/contributors"
          underline="hover"
          color={"#5e5ff0"}
          fontSize={14}
          ml={2}
        >
          Seja um Colaborador
        </Link>
        {localStorage.getItem('token') === null ?
          <Link
            href="/login"
            underline="hover"
            color={"#5e5ff0"}
            fontSize={14}
            ml={2}
            mr={4}
          >
            Login
          </Link>
          :
          <Avatar src={localStorage.getItem('@sj-name')}
            alt={localStorage.getItem('@sj-name')} sx={{ mr: 4, ml: 4 }} />
        }
      </Stack>
    </AppBar>
  );
}

export default AppBarNavigation

