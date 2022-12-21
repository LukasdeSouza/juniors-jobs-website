import React from 'react'

import { AppBar, Avatar, Link, Stack } from '@mui/material'

import Logo from '../../assets/logo_size_invert.jpg'

const AppBarNavigation = () => {
  return (
    <AppBar
      elevation={'none'}
      sx={{
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100vw',
        height: '80px',
        backgroundColor: '#141414',
        boxShadow: 0
      }}>
      <img src={Logo} width={'80px'} />
      <Stack flexDirection={'row'} alignItems={'center'}>
        <Link href='/jobs'
          underline='hover'
          color={'#fff'}
          fontSize={14}
          ml={2}>
          Vagas
        </Link>
        <Link href='/'
          underline='hover'
          color={'#fff'}
          fontSize={14}
          ml={2}>
          Cadastro
        </Link>
        <Link href='/'
          underline='hover'
          color={'#fff'}
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

