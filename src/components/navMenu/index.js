import React from 'react'

import { Stack, Typography } from '@mui/material'

import FlightIcon from '@mui/icons-material/Flight';
import PlaceIcon from '@mui/icons-material/Place';
import PublicIcon from '@mui/icons-material/Public';

import '../../styles/global.css'

const NavMenu = () => {
  return (
    <Stack
      flexDirection={'row'}
      justifyContent={'space-evenly'}
      mr={2}
    >
      <Stack flexDirection={'row'} alignItems={'center'}>
        <PlaceIcon sx={{ mr: 0.5 }} color='info' />
        <Typography
          className='default-font'
          sx={{ fontSize: 14, fontFamily: "Poppins", mr: 2 }}>
          Vagas Presenciais</Typography>
      </Stack>
      <Stack flexDirection={'row'} alignItems={'center'}>
        <PublicIcon sx={{ mr: 0.5 }} color='warning' />
        <Typography
          className='default-font'
          sx={{ fontSize: 14, fontFamily: "Poppins", mr: 2 }}>
          Vagas Remotas</Typography>
      </Stack>
      <Stack flexDirection={'row'} alignItems={'center'}>
        <FlightIcon sx={{ mr: 0.5 }} color='secondary' />
        <Typography
          className='default-font'
          sx={{ fontSize: 14, fontFamily: "Poppins", mr: 2 }}>
          Vagas Exterior</Typography>
      </Stack>

    </Stack>
  )
}

export default NavMenu