import React from 'react'

import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';

const PaginationJobs = () => {
  return (
    <Stack alignItems={'center'} mt={4}>
      <Pagination count={3} size='small' />
    </Stack>
  )
}

export default PaginationJobs