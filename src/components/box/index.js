import React, { useEffect, useState } from 'react'

import { Button, Stack, Typography } from '@mui/material'

import JobsStack from '../stack'
import '../../styles/global.css'

const JobsBox = () => {

  const [jobs, setJobs] = useState('')

  useEffect(() => {
    fetch('https://seek-jobs-website-api.onrender.com/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.group(error))
  }, [])

  return (
    <Stack alignItems={'center'} mt={6}>
      {jobs?.map((job) => (
        <JobsStack title={job.title}
          description={job.description}
          salary={job.salary}
          local={job.local}
        />
      ))}

      {/* <JobsStack title={'Title'}
        description={jobs.description}
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
      /> */}
    </Stack >
  )
}

export default JobsBox