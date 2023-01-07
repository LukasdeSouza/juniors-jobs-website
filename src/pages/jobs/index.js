import React, { useContext, useEffect, useState } from 'react'

import { observer } from 'mobx-react-lite'

import { Alert, Box, Button, Divider, Drawer, Stack, TextField, Typography } from '@mui/material'

import JobsBox from '../../components/box'
import AppBarNavigation from '../../components/appbar'
import RootStoreContext from '../../store/rootStore'
import JobsSkeleton from '../../components/skeleton'
import JobsRegister from '../../components/register'
import JobsController from '../../controller/jobsController'

import ErrorImage from '../../assets/undraw_cancel_re_pkdm.svg'
import Logo from '../../assets/logo_size-removebg.png'

import '../../styles/global.css'

import { motion } from "framer-motion"
import NewJobModal from '../../components/newjob';


const JobsPage = observer(() => {

  const { jobsStore, userStore } = useContext(RootStoreContext)
  const controller = new JobsController(jobsStore)

  const [isModalOpen, setIsModalOpen] = useState(false)

  //Pagination rule
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(jobsStore.state.jobsList.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = jobsStore.state.jobsList.slice(startIndex, endIndex)


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


  const clearFields = () => {
    jobsStore.setState('urlImage', '')
    jobsStore.setState('title', '')
    jobsStore.setState('description', '')
    jobsStore.setState('tecnologies', '')
    jobsStore.setState('salary', '')
    jobsStore.setState('local', '')
    jobsStore.setState('link', '')
    jobsStore.setState('pagination', '')

    setIsModalOpen(true)
  }

  const onSave = () => {
    controller.postNewJob(postNewJobObj)
    controller.getAllJobs()
  }

  return (
    <>
      <AppBarNavigation />
      <Stack alignItems={'center'} mt={4}>
        {jobsStore.state.alert &&
          <Alert color='success'
            variant='outlined'
            onClose={() => jobsStore.setState('alert', false)}
            sx={{ width: '300px' }}>Vaga Criada com Sucesso!
          </Alert>}
      </Stack>
      {localStorage.getItem('@sj-type') === 'company' &&
        <JobsRegister onClick={clearFields} />
      }
      {jobsStore.state.error &&
        < ErrorImage />}
      {jobsStore.loading ?
        <JobsSkeleton />
        :
        currentItems.map((job) => (
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
      <Stack flexDirection={'row'} justifyContent={'center'} mt={2} mb={4}>
        {Array.from(Array(pages), (item, index) => {
          return (
            <Button
              value={index}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
              sx={{ borderRadius: "50%" }}
            >{index + 1}</Button>
          )
        })}
      </Stack>

      <NewJobModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} controller={controller} />
    </>
  )
}
)

export default JobsPage