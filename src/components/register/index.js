import React from 'react'

import { Box, Button, Stack, Typography } from '@mui/material'

import '../../styles/global.css'

const JobsRegister = ({ onClick }) => {
  return (
    <Stack alignItems={'center'}>
      <Box sx={{ width: 550, height: 130, mb: 2, backgroundColor: "#ddd", borderRadius: 2, textAlign: 'center' }}>
        <br />Filters 👷🚧
        <br />Em construção
        <br /><Button
          variant='contained'
          onClick={onClick}
          sx={{ backgroundColor: '#363535' }}>
          <Typography variant sx={{ fontFamily: 'Poppins' }}>Adicionar nova Vaga</Typography>
        </Button>
      </Box>
    </Stack >
  )
}

export default JobsRegister