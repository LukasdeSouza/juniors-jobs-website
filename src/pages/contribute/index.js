import { Container, Box, Typography, Button, Link } from '@mui/material';

import AppBarNavigation from '../../components/appbar'

import contribuir_img from '../../assets/img-sec-contribuicao.png';

import './index.css';

//página de como contribuir
export default function ContributesPage() {
  return (
    <>
      <AppBarNavigation />
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "6em",
        }}
      >

        <Box sx={{ maxWidth: "450px" }}>
          <img src={contribuir_img} width={'100%'} />
        </Box>

        <Box sx={{ maxWidth: "430px", marginLeft: { sm: "0", md: "50px" }, marginTop: { xs: "4em", md: "0" } }}>
          <Box sx={{
            borderLeft: "4px solid var(--blue-scale-300)",
            paddingLeft: "1em",
            marginBottom: "3em"
          }}
          >
            <Typography variant='h4' fontSize={"2.6em"} fontFamily={'Montserrat'} fontWeight={600}>
              Curtiu o site ?
            </Typography>
            <Typography variant='subtitle1' style={{ color: "var(--blue-scale-400)" }} fontFamily={'Montserrat'} fontWeight={500}>
              Ajude-nos a mantê-lo
            </Typography>
          </Box>

          <Typography variant='h6' fontFamily={'Montserrat'}>
            <b style={{ color: "var(--blue-scale-400)" }}>Seek Jobs</b> é um projeto Open-Source
          </Typography>
          <br />
          <Typography variant='body1' fontFamily={'Montserrat'} fontWeight={500}>
            O seek jobs é um site gratuito de código aberto construído pela comunidade, nosso objetivo é ajudar a comunidade de desenvolvedores a encontrar emprego na área de forma simples e sem burocracia. Nosso site é mantido com a ajuda de pessoas como você, então considere nos ajudar.
          </Typography>

          <Box sx={{ textAlign: "center", marginTop: "1em" }}>
            <Button variant="contained" sx={{ bgcolor: "var(--blue-scale-400)", height: 52, width: 420 }}>
              <Typography fontFamily={'Montserrat'} fontWeight={600} color={'#fff'}>
                QUERO CONTRIBUIR
              </Typography>
            </Button>
            <Typography fontFamily={'Montserrat'}
              sx={{ color: "var(--black-scale-200)", mt: 4 }}>ou pelo pix da nossa Vakinha online </Typography>
            <Link underline='hover' fontSize={14}>3344996@vakinha.com.br</Link>
          </Box>
        </Box>

      </Container >
    </>
  )
}