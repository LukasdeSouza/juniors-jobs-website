import React from 'react'

import { Stack, Typography } from '@mui/material'

import FlightIcon from '@mui/icons-material/Flight';
import PlaceIcon from '@mui/icons-material/Place';
import PublicIcon from '@mui/icons-material/Public';

import './style.css'

const NavMenu = () => {
  return (
    <Stack
      flexDirection={'row'}
      justifyContent={'space-evenly'}
      mt={2}
      mb={8}
    >
      <Stack flexDirection={'row'} alignItems={'center'}>
        <PlaceIcon sx={{ mr: 1 }} color='success' />
        <Typography
          className='default-font'
          sx={{ fontFamily: 'Segoe UI', fontSize: 14 }}>
          Vagas Presenciais</Typography>
      </Stack>
      <Stack flexDirection={'row'} alignItems={'center'}>
        <PublicIcon sx={{ mr: 1 }} color='success' />
        <Typography
          className='default-font'
          sx={{ fontFamily: 'Segoe UI', fontSize: 14 }}>
          Vagas Remotas</Typography>
      </Stack>
      <Stack flexDirection={'row'} alignItems={'center'}>
        <FlightIcon sx={{ mr: 1 }} color='success' />
        <Typography
          className='default-font'
          sx={{ fontFamily: 'Segoe UI', fontSize: 14 }}>
          Vagas Exterior</Typography>
      </Stack>

    </Stack>
  )
}

export default NavMenu