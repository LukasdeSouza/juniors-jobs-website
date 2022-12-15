import React from 'react'

import { Stack } from '@mui/material'

import JobsStack from '../stack'
import '../../styles/global.css'


const JobsBox = () => {
  return (
    <Stack alignItems={'center'}>
      <JobsStack title={'Title'}
        description={"Description to this component to describe the job"}
        salary={'R$100'}
        local={'Remote'}
      />
      <JobsStack title={'Title'}
        description={"Description to this component to describe the job"}
        salary={'R$100'}
        local={'Remote'}
      />
      <JobsStack title={'Title'}
        description={"Description to this component to describe the job"}
        salary={'R$100'}
        local={'Remote'}
      />
      <JobsStack title={'Title'}
        description={"Description to this component to describe the job"}
        salary={'R$100'}
        local={'Remote'}
      />
    </Stack >
  )
}

export default JobsBox