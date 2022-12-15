import React from 'react'

import JobsBox from '../../components/box'
import NavMenu from '../../components/navMenu'

import { Container } from '@mui/material'


const JobsPage = () => {
  return (
    <Container>
      <NavMenu />
      <JobsBox />
    </Container>
  )
}

export default JobsPage