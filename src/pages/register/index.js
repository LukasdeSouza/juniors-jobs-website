import React, { useContext } from 'react'

import { Box, Container, Link, Stack, Typography } from '@mui/material'

import RegisterImg from '../../assets/sj-img-cadastro.svg'
import UserController from '../../controller/userController'
import RootStoreContext from '../../store/rootStore'

import '../../styles/global.css'

const RegisterPage = () => {

  const { userStore } = useContext(RootStoreContext)
  const controller = new UserController(userStore)

  return (
    <Stack mt={4} alignItems={'center'}>
      <Typography variant={'h6'} color={"var(--blue-scale-200"}>Desculpe! Ainda estamos em Produção</Typography>
      <Link href='/' underline='hover'>Voltar para página de Vagas</Link>
      <img src="https://cdn.dribbble.com/users/720738/screenshots/6720334/telescope_zidler.gif" width={600} />
    </Stack>
    // <Container
    //   sx={{ width: '888px', height: "507px", justifyContent: 'center', alignItems: 'center', mt: 7, bgcolor: "#0651B3", boxShadow: 3, borderRadius: '0 0 55px 0' }}>
    //   <Stack flexDirection={'row'} justifyContent={'flex-end'}>
    //     <img src={RegisterImg} width={300} style={{ marginRight: 36 }} />
    //     <Box sx={{ width: "444px", height: "507px", mr: -3, bgcolor: "#fff", borderRadius: '55px 0 55px 0' }}>

    //     </Box>
    //   </Stack>

    // </Container>
  )
}

export default RegisterPage