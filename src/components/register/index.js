import React from 'react'

import { Box, Button, Stack, Typography } from '@mui/material'

import '../../styles/global.css'

const JobsRegister = ({ onClick }) => {
  return (
    <Stack alignItems={'center'}>
      <Box sx={{ width: 790, height: 130, mb: 2, backgroundColor: "#5e5ff0", borderRadius: 2, textAlign: 'center' }}>
        <br />Filters 👷🚧
        <br />Em construção
        <br /><Button
          variant='contained'
          onClick={onClick}
          sx={{ backgroundColor: '#eee' }}>
          <Typography variant sx={{ fontFamily: 'Poppins', color: "#111" }}>Adicionar nova Vaga</Typography>
        </Button>
      </Box>
    </Stack >
  )
}

export default JobsRegister