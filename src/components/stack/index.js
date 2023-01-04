import React from 'react'

import './style.css'
import '../../styles/global.css'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Avatar, Button, Link, Stack, Typography, Chip } from '@mui/material'

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
          maxWidth: 1090,
          height: 150,
          borderRadius: 1,
          backgroundColor: "var(--white-scale-100)",
          boxShadow: 4
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
            sx={{ fontWeight: 500, fontSize: 12, mt: 1 }}>
            {description}
          </Typography>
          <Stack flexDirection={'row'}
            justifyContent={'space-between'}
            mt={1} >
            <Chip label={tecnologies}
              size='small'
              color='default'
            // sx={{ backgroundColor: "var(--black-scale-100)", color: "(--white-scale-100)" }} 
            />
            {/* <Typography variant
              color={'#504e4d'}
              className='default-font'
              sx={{ fontSize: 12, color: 'green' }}>
              {tecnologies}
            </Typography> */}
            <Stack alignItems={'flex-end'}>
              <Typography variant
                color={'#4e4f4d'}
                className='default-font'
                sx={{ fontSize: 12, color: 'green' }}>
                {salary}
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
            endIcon={<ArrowForwardIcon />}
            sx={{ backgroundColor: 'var(--blue-scale-200)', mt: 3, width: 170, height: 40 }}>
            <Link
              href={link}
              target="_blank"
              rel="noopener"
              underline='none'
              color={'#fff'}
              sx={{ fontSize: 12, textTransform: 'capitalize' }}>
              <Typography variant className='default-font'>Candidatar-se</Typography>
            </Link>
          </Button>
        </Stack>
      </Stack>
    </motion.div>
  )
}

export default JobsStack