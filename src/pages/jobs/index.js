import React from 'react'

import JobsBox from '../../components/box'
import NavMenu from '../../components/navMenu'

import { Container } from '@mui/material'
import PaginationJobs from '../../components/pagination'


const JobsPage = () => {
  return (
    <Container>
      <NavMenu />
      <JobsBox />
      <PaginationJobs />
    </Container>
  )
}

export default JobsPage