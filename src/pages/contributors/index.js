import React from 'react'

import AppBarNavigation from '../../components/appbar'

import { Box, Button, Stack, Typography } from '@mui/material'

import ContributorsImg from '../../assets/img-sec-contribuicao.svg'
import '../../styles/global.css'

const ContributorsPage = () => {
  return (
    <Stack>
      <AppBarNavigation />
      <Stack mt={20}
        flexDirection={'row'}
        justifyContent={'space-evenly'}>
        <Box bgcolor={'#0651B3'} borderRadius={"50%"} width={490} height={490}>
          <img src={ContributorsImg} alt="" width={401} style={{ marginLeft: 60, marginTop: 40 }} />
        </Box>
        <Stack flexDirection={'column'} mr={18}>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: 48 }}>Curtiu o Site?</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: 16, color: 'var(--blue-scale-300)' }}>Ajude nos a mantê-lo</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: 24, mt: 8 }}>Seek Jobs é um projeto Open-Source</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: 16, mt: 4 }}>Ou seja, ele é gratuito e atualmente não visa lucro para <br />
            a empresa. Nosso principal objetivo é ajudar a <br /> comunidade de tecnologia a encontrar a vaga ideal <br /> para seu perfil, além de  ganhar experiência através <br /> deste projeto.
          </Typography>
          <Stack mt={5}>
            <Button variant='contained'
              sx={{
                fontFamily: 'Poppins',
                height: 54,
                fontSize: 18,
                color: 'blue-scale-300'
              }}>Quero Contribuir!</Button>
          </Stack>
          <Typography mt={6} sx={{ fontFamily: 'Poppins', fontSize: 14, textAlign: 'center' }}>ou pelo pix da nossa Vakinha online
            <br /> <Typography sx={{ fontFamily: 'Poppins', fontSize: 14, color: "blue" }}>3344996@vakinha.com.br</Typography>
          </Typography>
        </Stack>
      </Stack>
    </Stack>

  )
}

export default ContributorsPage