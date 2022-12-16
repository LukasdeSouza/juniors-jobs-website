import { Avatar, Button, Link, Stack, Typography } from '@mui/material'
import React from 'react'

import './style.css'

const JobsStack = ({ urlImage, title, description, tecnologies, salary, local, link }) => {
  return (
    <Stack flexDirection={'row'}
      sx={{
        mt: 2,
        p: 2,
        minWidth: '524px',
        height: '129px',
        borderRadius: 2,
        border: '1px solid #d9d4a8',
        backgroundColor: "#ebe5b2",
      }}>
      <Avatar sx={{
        mr: 3, height: "69px", width: "69px"
      }}
        src={urlImage} />
      <Stack flexDirection={'column'} minWidth={'424px'}>
        <Typography
          className='default-font'
          color={'success'}
          sx={{ fontWeight: 700, fontSize: 16 }}>
          {title}
        </Typography>
        <Typography variant='body2'
          color={'#656273'}
          className='default-font'
          sx={{ fontWeight: 500 }}>
          {description}
        </Typography>
        <Stack flexDirection={'row'}
          justifyContent={'space-between'}
          mt={2} >
          <Typography variant='caption'
            color={'#758918'}
            className='default-font'
            sx={{ fontSize: 12, color: 'green' }}>
            {tecnologies}
          </Typography>
          <Stack alignItems={'flex-end'}>
            <Typography variant='caption'
              color={'#758918'}
              className='default-font'
              sx={{ fontSize: 12, color: 'green' }}>
              R${salary}
            </Typography>
            <Typography variant='caption'
              color={'#656273'}
              className='default-font'
              sx={{ fontSize: 12 }}>
              {local}
            </Typography>
          </Stack>
        </Stack>
        <Button
          variant='contained' fullWidth color={'success'}>
          <Link
            href={link}
            underline='none'
            variant='body2'
            className='default-font'
            color={'#eee'}
            sx={{ fontSize: 12, fontWeight: 700 }}>
            Me Candidatar
          </Link>
        </Button>
      </Stack>
    </Stack>
  )
}

export default JobsStack