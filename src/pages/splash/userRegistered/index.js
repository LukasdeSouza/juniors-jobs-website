import React from 'react'

import { useNavigate } from 'react-router'
import { Box, Button, Stack, Typography } from '@mui/material'

import Logo from '../../../assets/logo_size.jpg'

const UserRegisteredPage = () => {

  const navigate = useNavigate()

  return (
    <Stack justifyContent={'center'} alignItems={'center'} mt={10}>
      <img src={Logo} alt="Logo Seek Jobs" />
      <Typography fontFamily={'Montserrat'} fontWeigth={700} >Usuário Cadastrado com Sucesso!</Typography>
      <Button variant='contained' onClick={() => navigate('/')}
        sx={{ mt: 4, textTransform: "capitalize", fontFamily: 'Montserrat', width: 320 }}>Ver Nossas Vagas
      </Button>
    </Stack>
  )
}

export default UserRegisteredPage