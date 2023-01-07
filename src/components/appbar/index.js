import React, { useContext } from 'react'

import RootStoreContext from '../../store/rootStore'

import { AppBar, Avatar, Button, Link, Stack } from '@mui/material'

import Logo from '../../assets/logo_size.jpg'

import '../../styles/global.css'

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
        {userStore.state.token === '' &&
          <Button variant="contained" ml={2}>
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
        {userStore.state.token === '' ?
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
          <Avatar src={userStore.state.imageUrl !== '' ? userStore.state.imageUrl : userStore.state.name}
            alt={userStore.state.name} />
        }
      </Stack>
    </AppBar>
  );
}

export default AppBarNavigation

