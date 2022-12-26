import {Container, Box, Typography, Button} from '@mui/material';
import contribuir_img from '../../assets/img-sec-contribuicao.png';
import './index.css';

//página de como contribuir
export default function Contributes() {
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        paddingTop:"6em"
      }}

    >

      <Box sx={{maxWidth:"450px"}}>
        <img src={contribuir_img} width={'100%'}/>
      </Box>
        
      <Box sx={{maxWidth:"430px",marginLeft:{sm:"0", md:"50px"},marginTop:{xs:"4em",md:"0"}}}>
        <Box sx={{
          borderLeft:"4px solid var(--blue-scale-300)",
          paddingLeft:"1em",
          marginBottom:"3em"
          }}
        >
          <Typography variant='h4' fontSize={"2.6em"}>
            Curtiu o site ?
          </Typography>
          <Typography variant='subtitle1' style={{color:"var(--blue-scale-400)"}}>
            Ajude-nos a mantê-lo
          </Typography>
        </Box>

        <Typography variant='h6'>
          <b style={{color:"var(--blue-scale-400)"}}>Seek Jobs</b> é um projeto Open-Source
        </Typography>
        <br/>
        <Typography variant='body1'>
          O seek jobs é um site gratuito de código aberto construído pela comunidade, nosso objetivo é ajudar a comunidade de desenvolvedores a encontrar emprego na área de forma simples e sem burocracia. Nosso site é mantido com a ajuda de pessoas como você, então considere nos ajudar.
        </Typography>

        <Box sx={{textAlign: "center",marginTop:"3em"}}>
          <Button variant="contained" size='large'>QUERO CONTRIBUIR</Button>
          <p style={{color:"var(--black-scale-200)"}}>ou pelo pix da nossa Vakinha online </p>
          <a href=''>3344996@vakinha.com.br</a>
        </Box>
      </Box>

    </Container>
  )
}