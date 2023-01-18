import React from 'react'

import './style.css'
import '../../../styles/global.css'

import { Avatar, Stack, Typography, Chip } from '@mui/material'

import PicProfile from '../../../assets/undraw_pic_profile_re_7g2h.svg'

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
          <h5 style={{ fontWeight: 700 }}>
            {title}
          </h5>
          <p style={{ fontWeight: 500, fontSize: 12, mt: 1 }}>
            {description}
          </p>
          <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", marginTop: '0.5rem' }}>
            <Chip label={tecnologies}
              size='small'
              color='default'
            />
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
          </div>
          <button style={{ backgroundColor: 'var(--blue-scale-200)', border: 'none', borderRadius: '0.5rem', marginTop: 3, width: 170, height: 40 }}>
            <a style={{ fontSize: 12, color: "#fff" }}>
              Candidatar-se
            </a>
          </button>
        </Stack>
      </Stack>
    </motion.div>
  )
}

export default JobsStack