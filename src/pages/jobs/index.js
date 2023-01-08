import React, { useContext, useEffect, useState, componentDidMount, componentDidUpdate } from 'react'

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

import Direita from '../../assets/seta-direita.png'
import Esquerda from '../../assets/seta-esquerda.png'

// global css
import '../../styles/global.css'

//local css
import "./styles.css"

import NewJobModal from '../../components/newjob';


const JobsPage = observer(() => {

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
      <Stack alignItems={'center'} >
        {jobsStore.state.alert &&
          <Alert color='success'
            variant='outlined'
            onClose={() => jobsStore.setState('alert', false)}
            sx={{ width: '300px' }}>Vaga Criada com Sucesso!
          </Alert>}
      </Stack>
      <JobsRegister onClick={clearFields} />
      {jobsStore.state.error && < ErrorImage />}
      {jobsStore.loading ? <JobsSkeleton /> :
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

      <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>

      <NewJobModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} controller={controller} />
    </>
  )
}
)

class Pagination extends React.Component {
  constructor(props){
    super(props)

    this.allElements = document.getElementsByClassName("bg-pagination")
  }

  async componentDidUpdate(){  
    this.allElements[this.props.currentPage].className = "bg-pagination pagina-atual"
  } 

  render() {
    return(
      <div 
        className='flex flex-row justify-center align-items my-4'
      >
        {(this.props.currentPage === 0)?
          <img className='arrows-disabled' src={Esquerda}/> :
          <img className='arrows' src={Esquerda} onClick={() => this.props.setCurrentPage(this.props.currentPage - 1)}/>
        }
        {Array.from(Array(this.props.pages), (item, index) => {
          return (
            <div
              id={index}
              key={index}
              onClick={() => this.props.setCurrentPage(Number(index))}
              className="bg-pagination"
            >
              {index + 1}
            </div>
          )
        })}
        {(this.props.currentPage + 1 === this.props.pages)? 
          <img className='arrows-disabled' src={Direita}/> :
          <img className='arrows' src={Direita} onClick={() => this.props.setCurrentPage(this.props.currentPage + 1)}/>
        }
      </div>
    );
  }
}

export default JobsPage