import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import '../../styles/global.css'

const JobsRegister = ({ onClick }) => {
  return (
    <Stack alignItems={'center'}>
      <Button
        variant='contained'
        onClick={onClick}
        sx={{ backgroundColor: '#363535' }}>
        <Typography variant className='default-font'>Adicionar nova Vaga</Typography>
      </Button>
    </Stack>
  )
}

export default JobsRegister