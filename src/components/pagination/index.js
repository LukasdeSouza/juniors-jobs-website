import React from 'react'

import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';

const PaginationJobs = ({ page }) => {

  return (
    <Stack alignItems={'center'} mt={4}>
      <Pagination
        page={page}
        count={3}
        color={'success'}
        size='small'
      />
    </Stack>
  )
}

export default PaginationJobs