import React from 'react'

import { Stack, Typography } from '@mui/material'

import './style.css'

const NavMenu = () => {
  return (
    <Stack flexDirection={'row'} justifyContent={'space-evenly'}>
      <Typography
        className='default-font'
        sx={{ fontFamily: 'Segoe UI', fontSize: 14, fontWeight: 700 }}>
        Vagas Presenciais</Typography>
      <Typography
        className='default-font'
        sx={{ fontFamily: 'Segoe UI', fontSize: 14, fontWeight: 700 }}>
        Vagas Remotas</Typography>
      <Typography
        className='default-font'
        sx={{ fontFamily: 'Segoe UI', fontSize: 14, fontWeight: 700 }}>
        Vagas Exterior</Typography>
    </Stack>
  )
}

export default NavMenu