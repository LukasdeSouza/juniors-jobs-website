import React from 'react'

import { Box, Container, Stack } from '@mui/material'

import RegisterImg from '../../assets/sj-img-cadastro.svg'

const RegisterPage = () => {
  return (
    <Container
      sx={{ width: '888px', height: "507px", justifyContent: 'center', alignItems: 'center', mt: 7, bgcolor: "#0651B3", boxShadow: 3, borderRadius: '0 0 55px 0' }}>
      <Stack flexDirection={'row'} justifyContent={'flex-end'}>
        <img src={RegisterImg} width={300} style={{ marginRight: 36 }} />
        <Box sx={{ width: "444px", height: "507px", mr: -3, bgcolor: "#fff", borderRadius: '55px 0 55px 0' }}>

        </Box>
      </Stack>

    </Container>
  )
}

export default RegisterPage