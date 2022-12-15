import React from 'react'

import { Avatar, Box, Stack, Typography } from '@mui/material'

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import '../../styles/global.css'

const JobsBox = () => {
  return (
    <Box >
      <Stack flexDirection={'row'}
        sx={{
          mt: 2,
          p: 2,
          width: '524px',
          height: '79px',
          borderRadius: 2,
          border: '1px solid #ACACAC',
          backgroundColor: "#F3F2F2"
        }}>
        <Avatar sx={{ mr: 3, height: "69px", width: "69px" }} />
        <Stack flexDirection={'column'} >
          <Typography
            sx={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 16 }}>
            Title</Typography>
          <Typography variant='body2'
            sx={{ fontFamily: "sans-serif", fontWeight: 500 }}>
            Description to this component to describe the job</Typography>
          <Stack flexDirection={'row'} mt={2} justifyContent={'space-between'}>
            <Typography variant='caption'
              sx={{ fontFamily: "sans-serif", fontSize: 10, color: 'green' }}>R$100,00</Typography>
            <Typography variant='caption'
              sx={{ fontFamily: "sans-serif", fontSize: 10 }}>Remote</Typography>
            <Typography variant='caption'
              sx={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>Me Candidatar</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack flexDirection={'row'}
        sx={{
          mt: 2,
          p: 2,
          width: '524px',
          height: '79px',
          borderRadius: 2,
          border: '1px solid #ACACAC',
          backgroundColor: "#F3F2F2"
        }}>
        <Avatar sx={{ mr: 3, height: "69px", width: "69px" }} />
        <Stack flexDirection={'column'} >
          <Typography
            sx={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 16 }}>
            Title</Typography>
          <Typography variant='body2'
            sx={{ fontFamily: "sans-serif", fontWeight: 500 }}>
            Description to this component to describe the job</Typography>
          <Stack flexDirection={'row'} mt={2} justifyContent={'space-between'}>
            <Typography variant='caption'
              sx={{ fontFamily: "sans-serif", fontSize: 10, color: 'green' }}>R$100,00</Typography>
            <Typography variant='caption'
              sx={{ fontFamily: "sans-serif", fontSize: 10 }}>Remote</Typography>
            <Typography variant='caption'
              sx={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>Me Candidatar</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack flexDirection={'row'}
        sx={{
          mt: 2,
          p: 2,
          width: '524px',
          height: '79px',
          borderRadius: 2,
          border: '1px solid #ACACAC',
          backgroundColor: "#F3F2F2"
        }}>
        <Avatar sx={{ mr: 3, height: "69px", width: "69px" }} />
        <Stack flexDirection={'column'} >
          <Typography
            sx={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 16 }}>
            Title</Typography>
          <Typography variant='body2'
            sx={{ fontFamily: "sans-serif", fontWeight: 500 }}>
            Description to this component to describe the job</Typography>
          <Stack flexDirection={'row'} mt={2} justifyContent={'space-between'}>
            <Typography variant='caption'
              sx={{ fontFamily: "sans-serif", fontSize: 10, color: 'green' }}>R$100,00</Typography>
            <Typography variant='caption'
              sx={{ fontFamily: "sans-serif", fontSize: 10 }}>Remote</Typography>
            <Typography variant='caption'
              sx={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>Me Candidatar</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack flexDirection={'row'}
        sx={{
          mt: 2,
          p: 2,
          width: '524px',
          height: '79px',
          borderRadius: 2,
          border: '1px solid #ACACAC',
          backgroundColor: "#F3F2F2"
        }}>
        <Avatar sx={{ mr: 3, height: "69px", width: "69px" }} />
        <Stack flexDirection={'column'} >
          <Typography
            sx={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 16 }}>
            Title</Typography>
          <Typography variant='body2'
            sx={{ fontFamily: "sans-serif", fontWeight: 500 }}>
            Description to this component to describe the job</Typography>
          <Stack flexDirection={'row'} mt={2} justifyContent={'space-between'}>
            <Typography variant='caption'
              sx={{ fontFamily: "sans-serif", fontSize: 10, color: 'green' }}>R$100,00</Typography>
            <Typography variant='caption'
              sx={{ fontFamily: "sans-serif", fontSize: 10 }}>Remote</Typography>
            <Typography variant='caption'
              sx={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>Me Candidatar</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack flexDirection={'row'}
        sx={{
          mt: 2,
          p: 2,
          width: '524px',
          height: '79px',
          borderRadius: 2,
          border: '1px solid #ACACAC',
          backgroundColor: "#F3F2F2"
        }}>
        <Avatar sx={{ mr: 3, height: "69px", width: "69px" }} />
        <Stack flexDirection={'column'} >
          <Typography
            sx={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 16 }}>
            Title</Typography>
          <Typography variant='body2'
            sx={{ fontFamily: "sans-serif", fontWeight: 500 }}>
            Description to this component to describe the job</Typography>
          <Stack flexDirection={'row'} mt={2} justifyContent={'space-between'}>
            <Typography variant='caption'
              sx={{ fontFamily: "sans-serif", fontSize: 10, color: 'green' }}>R$100,00</Typography>
            <Typography variant='caption'
              sx={{ fontFamily: "sans-serif", fontSize: 10 }}>Remote</Typography>
            <Typography variant='caption'
              sx={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>Me Candidatar</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box >
  )
}

export default JobsBox