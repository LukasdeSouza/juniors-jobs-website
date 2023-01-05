import React, { useContext } from 'react'

import RootStoreContext from '../../store/rootStore'

import { AppBar, Avatar, Button, Link, Stack } from '@mui/material'

import Logo from '../../assets/logo_size.jpg'

import '../../styles/global.css'

const AppBarNavigation = () => {

  const { userStore, jobsStore } = useContext(RootStoreContext)

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
          href="/jobs"
          underline="hover"
          color={"#5e5ff0"}
          fontSize={14}
          ml={2}
          mr={2}
        >
          Vagas
        </Link>
        <Button variant="contained" ml={2}>
          <Link href="/register" underline="hover" color={"#fff"} fontSize={12}>
            Me Cadastrar
          </Link>
        </Button>
        <Link
          href="/contributors"
          underline="hover"
          color={"#5e5ff0"}
          fontSize={14}
          ml={2}
        >
          Seja um Colaborador
        </Link>

        {userStore.state._id === "" ? (
          <>
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
          </>
        ) : (
          <>
            <Button onClick={() => jobsStore.setState("openDrawer", true)}>
              Adicionar Vaga
            </Button>
            <Avatar sx={{ mr: 2, cursor: "pointer" }} />
          </>
        )}
      </Stack>
    </AppBar>
  );
}

export default AppBarNavigation

