import React from 'react'

import { AppBar, Avatar, Button, Link, Stack } from '@mui/material'

import Logo from '../../assets/logo_size.jpg'

import '../../styles/global.css'

const AppBarNavigation = () => {
  return (
    <AppBar
      elevation={'none'}
      sx={{
        position: "static",
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100vw',
        height: '80px',
        backgroundColor: '#fff',
        boxShadow: 0
      }}>
      <img src={Logo} width={'80px'} />
      <Stack flexDirection={'row'} alignItems={'center'}>
        <Link href='/jobs'
          underline='hover'
          color={'#5e5ff0'}
          fontSize={14}
          ml={2}
          mr={2}>
          Vagas
        </Link>
        <Button variant='contained' ml={2}>
          <Link href='/register'
            underline='hover'
            color={'#fff'}
            fontSize={12}
            sx={{ fontFamily: 'Poppins' }}
          >
            Me Cadastrar
          </Link>
        </Button>
        <Link href='/'
          underline='hover'
          color={'#5e5ff0'}
          fontSize={14}
          ml={2}
          mr={2}>
          Login
        </Link>
        <Avatar sx={{ mr: 2, cursor: 'pointer' }} />
      </Stack>
    </AppBar>
  )
}

export default AppBarNavigation

