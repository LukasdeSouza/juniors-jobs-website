import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { observer } from 'mobx-react-lite'

import { Box, Button, Divider, Drawer, Stack, TextField, Typography } from '@mui/material'
import AddToQueueIcon from '@mui/icons-material/AddToQueue';

import JobsBox from '../../components/box'
import NavMenu from '../../components/navMenu'
import PaginationJobs from '../../components/pagination'
import RootStoreContext from '../../store/rootStore'
import JobsSkeleton from '../../components/skeleton'
import JobsRegister from '../../components/register'
import JobsController from '../../controller/jobsController'

import ErrorImage from '../../assets/undraw_cancel_re_pkdm.svg'
import Logo from '../../assets/logo_size.jpg'

import '../../styles/global.css'

import { motion } from "framer-motion"


const JobsPage = observer(() => {

  const { jobsStore } = useContext(RootStoreContext)
  const controller = new JobsController(jobsStore)

  useEffect(() => {
    controller.getAllJobs()
  }, [])

  const postNewJobObj = {
    urlImage: jobsStore.state.urlImage,
    title: jobsStore.state.title,
    description: jobsStore.state.description,
    tecnologies: jobsStore.state.tecnologies,
    salary: jobsStore.state.salary,
    local: jobsStore.state.local,
    link: jobsStore.state.link,
    pagination: jobsStore.state.pagination
  }

  const onSave = () => {
    controller.postNewJob(postNewJobObj)
    jobsStore.setState('openDrawer', false)
    controller.getAllJobs()
    alert('Nova Vaga Criada com Sucesso')
  }

  return (
    <>
      <Stack flexDirection={'row'} justifyContent={'space-between'}>
        <img src={Logo} alt="" style={{ width: '100px' }} />
        <NavMenu />
      </Stack>
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
        <motion.div
          initial={{ x: '-100vw' }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          animate={{ x: 0 }}
        >
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
            <Box p={2} width={305}>
              <Stack flexDirection={'row'} alignItems={'center'} p={1}>
                {/* <AddToQueueIcon color='warning' /> */}
                <Typography
                  sx={{ fontSize: 16, fontFamily: 'Poppins' }}>
                  Cadastro de Nova Vaga
                </Typography>
              </Stack>
              <Divider />
              <Stack flexDirection={'column'} mt={2}>
                <Typography variant='caption' sx={{ fontFamily: 'Poppins' }}>Logo da Empresa (URL)</Typography>
                <TextField size='small'
                  // placeholder='www.urlogodampresa.com/logo.png'
                  onChange={(e) => jobsStore.setState('urlImage', e.target.value)} />
                <Typography variant='caption' mt={1} sx={{ fontFamily: 'Poppins' }}>Título da Vaga</Typography>
                <TextField size='small'
                  // placeholder='Desenvolvedor FullStack'
                  onChange={(e) => jobsStore.setState('title', e.target.value)} />
                <Typography variant='caption' mt={1} sx={{ fontFamily: 'Poppins' }}>Mini Descrição</Typography>
                <TextField size='small'
                  // placeholder='Jr /Pleno/ CLT/PJ'
                  onChange={(e) => jobsStore.setState('description', e.target.value)} />
                <Typography variant='caption' mt={1} sx={{ fontFamily: 'Poppins' }}>Stacks/ Tecnologias</Typography>
                <TextField size='small'
                  // placeholder='JavaScript / Java'
                  onChange={(e) => jobsStore.setState('tecnologies', e.target.value)} />
                <Typography variant='caption' mt={1} sx={{ fontFamily: 'Poppins' }}>Salário</Typography>
                <TextField size='small'
                  // placeholder='R$ 2000'
                  onChange={(e) => jobsStore.setState('salary', e.target.value)} />
                <Typography variant='caption' mt={1} sx={{ fontFamily: 'Poppins' }}>Local</Typography>
                <TextField size='small'
                  // placeholder='Remote/Híbrido ou Local Presencial'
                  onChange={(e) => jobsStore.setState('local', e.target.value)} />
                <Typography variant='caption' mt={1} sx={{ fontFamily: 'Poppins' }}>Link da Vaga</Typography>
                <TextField size='small'
                  // placeholder='www.vagaparainscricao.com'
                  onChange={(e) => jobsStore.setState('link', e.target.value)} />
                <Button variant='contained'
                  onClick={onSave}
                  sx={{ backgroundColor: '#363535', mt: 2, fontFamily: 'Poppins' }}>Salvar</Button>
              </Stack>
            </Box>
          </Drawer>
        </motion.div>
      }

    </>
  )
}
)

export default JobsPage