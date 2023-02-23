import React, { useContext, useEffect, useState } from 'react'

import { observer } from 'mobx-react-lite'

import { Alert, Stack } from '@mui/material'

import AppBarNavigation from '../../components/general/appbar'
import Input from '../../components/general/input'
import Button from '../../components/general/button'

import JobsController from '../../controller/jobsController'
import RootStoreContext from '../../store/rootStore'

import ErrorImage from '../../assets/undraw_cancel_re_pkdm.svg'

import SitGuy from '../../assets/sit-in-a-char-man-jobs-page.svg'
import '../../styles/global.css'
import "./styles.css"
import Footer from '../../components/general/footer'
import { useNavigate } from 'react-router-dom'
import CheckboxFilter from './components/checkbox'
import BoxJobs from './components/box'
import FilterJobs from './components/filter'
// import PaginationJobs from './components/pagination'



const JobsPage = observer(() => {
  const navigate = useNavigate()

  const { jobsStore } = useContext(RootStoreContext)
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
    _id_empresa: jobsStore.state.jobsList._id,
    urlImage: jobsStore.state.jobsList.urlImage,
    name: jobsStore.state.jobsList.name,
    title: jobsStore.state.jobsList.title,
    description: jobsStore.state.jobsList.description,
    tecnologies: jobsStore.state.jobsList.tecnologies,
    salary: jobsStore.state.jobsList.salary,
    local: jobsStore.state.jobsList.local,
    link: jobsStore.state.jobsList.link,
    tier: jobsStore.state.jobsList.tier,
    type: jobsStore.state.jobsList.tier
  }


  const clearFields = () => {
    jobsStore.setState('jobsList', [])
    navigate('/register-jobs')
  }

  const onSave = () => {
    controller.postNewJob(postNewJobObj)
    controller.getAllJobs()
  }

  return (
    <>
      <AppBarNavigation />
      <div className='header-jobs-page'>
        <div className='header-jobs-page-column'>
          <h2>Buscar Emprego nunca <br /> foi tão fácil</h2>
          <p>Seek Jobs é uma nova maneira de encontrar <br />
            empregos na área de tecnologia sem burocracias <br />
            e dores de cabeça, e com mais praticidade</p>
          {/* <div className='filter-input-container'>
            <Input placeHolder={'Busca geral'}
            />
            <Input placeHolder={'Buscar por localidade'} />
            <Button text={'Buscar Vagas'} style={{ padding: 0 }} />
          </div> */}
        </div>
        <img src={SitGuy} alt="Homem sentado em um cadeira"
          style={{ width: 238, height: 350 }}
        />
      </div>

      <div className='filter-jobs-main-container'>
        <FilterJobs />
        <div className='jobs-grid'>
          {jobsStore.state.jobsList.map((job) => (
            <BoxJobs
              img={job.urlImage}
              name={job.name ?? 'Empresa Contrata'}
              location={job.local === 'A combinar' ? 'Presencial' : job.local}
              title={job.title}
              type={job.type ?? 'CLT'}
              tier={job.tier ?? 'Júnior'}
              salary={job.salary}
              description={job.description}
            />
          ))}
        </div>
      </div>

      {/* <Stack alignItems={'center'} mt={4}>
        {jobsStore.state.alert
          &&
          <Alert color='success'
            variant='outlined'
            onClose={() => jobsStore.setState('alert', false)}
            sx={{ width: '300px' }}>
            Vaga Criada com Sucesso!
          </Alert>
        }
      </Stack> */}

      {/* {localStorage.getItem('@sj-type') === 'company'
        &&
        <JobsRegister onClick={clearFields} />
      }
      {jobsStore.state.error
        &&
        < ErrorImage />
      } */}

      {/* <PaginationJobs pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      /> */}
      <Footer />
    </>
  )
}
)


export default JobsPage