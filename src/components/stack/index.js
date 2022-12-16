import React from 'react'

import './style.css'

import { Avatar, Button, Link, Stack, Typography } from '@mui/material'

import PicProfile from '../../assets/undraw_pic_profile_re_7g2h.svg'

import { motion } from "framer-motion"

const JobsStack = ({ urlImage, title, description, tecnologies, salary, local, link }) => {
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      transition={{
        duration: 0.9,
        ease: "easeInOut",
      }}
      animate={{ x: 0 }}
    >
      <Stack flexDirection={'row'}
        sx={{
          mt: 2,
          p: 2,
          minWidth: '524px',
          height: '125px',
          borderRadius: 6,
          border: '0.8px solid lightgrey',
          backgroundColor: "#eff3f3",
        }}>
        <Avatar sx={{
          mr: 3, height: "69px", width: "69px"
        }}
          src={urlImage ? urlImage : PicProfile} />
        <Stack
          flexDirection={'column'}
          minWidth={'424px'}>
          <Typography
            className='default-font'
            sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography variant
            color={'#656273'}
            className='default-font'
            sx={{ fontWeight: 500, fontSize: 12 }}>
            {description}
          </Typography>
          <Stack flexDirection={'row'}
            justifyContent={'space-between'}
            mt={1} >
            <Typography variant
              color={'#ed6c02'}
              className='default-font'
              sx={{ fontSize: 12, color: 'green' }}>
              {tecnologies}
            </Typography>
            <Stack alignItems={'flex-end'}>
              <Typography variant
                color={'#758918'}
                className='default-font'
                sx={{ fontSize: 12, color: 'green' }}>
                R${salary}
              </Typography>
              <Typography variant
                color={'#656273'}
                className='default-font'
                sx={{ fontSize: 12 }}>
                {local}
              </Typography>
            </Stack>
          </Stack>
          <Button
            variant='contained'
            fullWidth
            sx={{ bgcolor: '#ffd00f', mt: 1 }}>
            <Link
              href={link}
              underline='none'
              color={'#333'}
              sx={{ fontSize: 12, fontWeight: 700 }}>
              <Typography variant className='default-font'>Me Candidatar</Typography>
            </Link>
          </Button>
        </Stack>
      </Stack>
    </motion.div>
  )
}

export default JobsStack