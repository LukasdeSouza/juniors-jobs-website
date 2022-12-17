import React from 'react'

import { Stack } from '@mui/material'

import JobsStack from '../stack'

import '../../styles/global.css'

const JobsBox = ({ urlImage, title, description, tecnologies, salary, local, link }) => {


  return (
    <Stack alignItems={'center'} mt={1}>
      <JobsStack
        urlImage={urlImage}
        title={title}
        description={description}
        tecnologies={tecnologies}
        salary={salary}
        local={local}
        link={link}
      />
    </Stack >
  )
}

export default JobsBox