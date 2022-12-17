import { Button, Stack } from '@mui/material'
import React from 'react'

const JobsRegister = ({ onClick }) => {
  return (
    <Stack alignItems={'center'}>
      <Button
        variant='contained'
        onClick={onClick}
        sx={{ bgcolor: "#f08731" }}>
        Adicionar nova Vaga
      </Button>
    </Stack>
  )
}

export default JobsRegister