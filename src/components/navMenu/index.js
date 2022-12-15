import { Stack, Typography } from '@mui/material'
import React from 'react'

const NavMenu = () => {
  return (
    <Stack flexDirection={'row'} justifyContent={'space-evenly'}>
      <Typography sx={{ fontFamily: 'Segoe UI', fontSize: 14, fontWeight: 700 }}>
        Vagas Presenciais</Typography>
      <Typography sx={{ fontFamily: 'Segoe UI', fontSize: 14, fontWeight: 700 }}>
        Vagas Remotas</Typography>
      <Typography sx={{ fontFamily: 'Segoe UI', fontSize: 14, fontWeight: 700 }}>
        Vagas Exterior</Typography>
    </Stack>
  )
}

export default NavMenu