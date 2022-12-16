import { Skeleton, Stack } from '@mui/material'
import React from 'react'

const JobsSkeleton = () => {
  return (
    <>
      <Stack
        flexDirection={'row'}
        justifyContent={'center'}>
        <Skeleton variant='circular' width={69} height={69} sx={{ mr: 2 }} />
        <Stack flexDirection={'column'}>
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} width={'524px'} height={"30px"} />
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} width={'124px'} height={"30px"} />
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} width={'224px'} height={"30px"} />
          <Skeleton variant='rectangular' width={'424px'} height={"40px"} sx={{ mt: 2, borderRadius: 2 }} />
        </Stack>
      </Stack>
      <Stack
        mt={6}
        flexDirection={'row'}
        justifyContent={'center'}>
        <Skeleton variant='circular' width={69} height={69} sx={{ mr: 2 }} />
        <Stack flexDirection={'column'}>
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} width={'524px'} height={"30px"} />
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} width={'124px'} height={"30px"} />
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} width={'224px'} height={"30px"} />
          <Skeleton variant='rectangular' width={'424px'} height={"40px"} sx={{ mt: 2, borderRadius: 2 }} />
        </Stack>
      </Stack>
      <Stack
        mt={6}
        flexDirection={'row'}
        justifyContent={'center'}>
        <Skeleton variant='circular' width={69} height={69} sx={{ mr: 2 }} />
        <Stack flexDirection={'column'}>
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} width={'524px'} height={"30px"} />
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} width={'124px'} height={"30px"} />
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} width={'224px'} height={"30px"} />
          <Skeleton variant='rectangular' width={'424px'} height={"40px"} sx={{ mt: 2, borderRadius: 2 }} />
        </Stack>
      </Stack>
      <Stack
        mt={6}
        flexDirection={'row'}
        justifyContent={'center'}>
        <Skeleton variant='circular' width={69} height={69} sx={{ mr: 2 }} />
        <Stack flexDirection={'column'}>
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} width={'424px'} height={"30px"} />
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} width={'124px'} height={"30px"} />
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} width={'224px'} height={"30px"} />
          <Skeleton variant='rectangular' width={'424px'} height={"40px"} sx={{ mt: 2, borderRadius: 2 }} />
        </Stack>
      </Stack>
    </>
  )
}

export default JobsSkeleton