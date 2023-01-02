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
          minWidth: 790,
          height: 130,
          borderRadius: 4,
          border: '0.8px solid lightgrey',
          backgroundColor: "#eff3f3",
        }}>
        <Avatar sx={{
          mr: 3, height: "69px", width: "69px"
        }}
          src={urlImage ? urlImage : PicProfile} />
        <Stack
          flexDirection={'column'}
          minWidth={744}>
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
              color={'#504e4d'}
              className='default-font'
              sx={{ fontSize: 12, color: 'green' }}>
              {tecnologies}
            </Typography>
            <Stack alignItems={'flex-end'}>
              <Typography variant
                color={'#4e4f4d'}
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
            sx={{ backgroundColor: '#5e5ff0', mt: 1, width: 250 }}>
            <Link
              href={link}
              underline='none'
              color={'#fff'}
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