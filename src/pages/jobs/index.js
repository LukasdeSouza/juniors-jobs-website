import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { observer } from 'mobx-react-lite'

import { Button, Divider, Drawer, Stack, TextField, Typography } from '@mui/material'
import AddToQueueIcon from '@mui/icons-material/AddToQueue';

import JobsBox from '../../components/box'
import NavMenu from '../../components/navMenu'
import PaginationJobs from '../../components/pagination'
import RootStoreContext from '../../store/rootStore'
import JobsSkeleton from '../../components/skeleton'
import JobsRegister from '../../components/register'
import JobsController from '../../controller/jobsController'

import ErrorImage from '../../assets/undraw_cancel_re_pkdm.svg'

import './styles.css'
import { Box } from '@mui/system';

const JobsPage = observer(() => {

  const { jobsStore } = useContext(RootStoreContext)
  const controller = new JobsController(jobsStore)

  useEffect(() => {
    controller.getAllJobs()
  }, [])


  return (
    <>
      <NavMenu />
      <JobsRegister onClick={() => jobsStore.setState('openDrawer', true)} />
      {jobsStore.state.error && < ErrorImage />}
      {jobsStore.loading ? <JobsSkeleton /> :
        jobsStore.state.jobsList.map((job) => (
          <JobsBox
            urlImage={job.urlImage !== '' ? job.urlImage : ''}
            title={job.title}
            description={job.description}
            local={job.local}
            tecnologies={job.tecnologies !== '' ? job.tecnologies : ''}
            salary={job.salary}
            link={job.link}
          />
        ))}
      {/* <PaginationJobs page={jobsStore.state.page} onChange={() => {
        jobsStore.state.page(jobsStore.state.page++)
        controller.getAllJobs()
      }
      }
      /> */}
      {jobsStore.state.openDrawer &&
        <Drawer
          anchor={'right'}
          open={jobsStore.state.openDrawer}
          onClose={() => jobsStore.setState('openDrawer', false)}
          PaperProps={{
            sx: {
              background: 'white',
              width: '350px'
            }
          }}
        >
          <Box p={1.5} width={305}>
            <Stack flexDirection={'row'} alignItems={'center'} p={1}>
              <AddToQueueIcon color='warning' />
              <Typography className='default-font'
                sx={{ ml: 2, fontSize: 14 }}>
                Cadastro de Nova Vaga
              </Typography>
            </Stack>
            <Divider />
            <Stack flexDirection={'column'} mt={2}>
              <Typography variant='caption'>Logo da Empresa (URL)</Typography>
              <TextField size='small' placeholder='www.urlogodampresa.com/logo.png' />
              <Typography variant='caption' mt={1}>Título da Vaga</Typography>
              <TextField size='small' placeholder='Desenvolvedor FullStack' />
              <Typography variant='caption' mt={1}>Mini Descrição</Typography>
              <TextField size='small' placeholder='Júnior / Pleno / Sênior' />
              <Typography variant='caption' mt={1}>Stacks/ Tecnologias</Typography>
              <TextField size='small' placeholder='JavaScript / Java / Node.JS/ C#' />
              <Typography variant='caption' mt={1}>Salário</Typography>
              <TextField size='small' placeholder='R$ 2000' />
              <Typography variant='caption' mt={1}>Local</Typography>
              <TextField size='small' placeholder='Remote/Híbrido ou Local Presencial' />
              <Typography variant='caption' mt={1}>Link da Vaga</Typography>
              <TextField size='small' placeholder='www.vagaparainscricao.com' />
              <Typography variant='caption' mt={1}>Página</Typography>
              <TextField size='small' placeholder='Não preencher' />
              <Button variant='contained'
                color='warning'
                sx={{ mt: 2 }}>Salvar</Button>
            </Stack>
          </Box>
        </Drawer>
      }

    </>
  )
}
)

export default JobsPage