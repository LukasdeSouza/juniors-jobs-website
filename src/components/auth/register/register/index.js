import { Button, Stack, Typography } from '@mui/material'

import '../../../../styles/global.css'

const JobsRegister = ({ onClick }) => {
  return (
    <Stack alignItems={'center'}>
      <Button
        variant="contained"
        onClick={onClick}
        naviga
        sx={{ backgroundColor: 'var(--blue-scale-300)' }}
      >
        <Typography variant sx={{ color: 'var(--white-scale-100)' }}>
          Adicionar nova Vaga
        </Typography>
      </Button>
      {/* </Box> */}
    </Stack>
  )
}

export default JobsRegister
