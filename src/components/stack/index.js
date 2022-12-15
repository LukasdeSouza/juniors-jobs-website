import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'

import './style.css'

const JobsStack = ({ title, description, salary, local }) => {
  return (
    <Stack flexDirection={'row'}
      sx={{
        mt: 2,
        p: 2,
        minWidth: '524px',
        height: '69px',
        borderRadius: 2,
        border: '1px solid #ACACAC',
        backgroundColor: "#F3F2F2",
      }}>
      <Avatar sx={{ mr: 3, height: "69px", width: "69px" }} />
      <Stack flexDirection={'column'} >
        <Typography
          className='default-font'
          sx={{ fontWeight: 700, fontSize: 16 }}>
          {title}
        </Typography>
        <Typography variant='body2'
          className='default-font'
          sx={{ fontWeight: 500 }}>
          {description}
        </Typography>
        <Stack flexDirection={'row'} mt={2} justifyContent={'space-between'}>
          <Typography variant='caption'
            className='default-font'
            sx={{ fontSize: 10, color: 'green' }}>
            {salary}
          </Typography>
          <Typography variant='caption'
            className='default-font'
            sx={{ fontSize: 10 }}>
            {local}
          </Typography>
          <Typography variant='caption'
            className='default-font'
            sx={{ fontSize: 10, fontWeight: 700 }}>
            Me Candidatar
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default JobsStack