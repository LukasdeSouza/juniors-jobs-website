import { useContext, useEffect, useState } from 'react'

import { observer } from 'mobx-react-lite'

import AppBarNavigation from '../../components/general/appbar'

import JobsController from '../../controller/jobsController'
import RootStoreContext from '../../store/rootStore'

import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo_size-removebg.png'
import SitGuy from '../../assets/sit-in-a-char-man-jobs-page.svg'
import Footer from '../../components/general/footer'
import '../../styles/global.css'
import BoxJobs from './components/box'
import './styles.css'
import PaginationComponent from '../../components/pagination'
import { mockJobs } from '../../utils/mockJobs'
import { getToken } from '../../utils/getToken'
import { Backdrop, Box, Button, CircularProgress, Link, Skeleton, Stack } from '@mui/material'
import { useScreenSize } from 'react-screen-size-helper'
import { breakpoints } from '../../utils/breakpoints'

const JobsPage = observer(() => {
  const { jobsStore, userStore } = useContext(RootStoreContext)
  const controller = new JobsController(jobsStore)
  const { isMobile, isTablet, isDesktop } = useScreenSize({ breakpoints })
  const navigate = useNavigate()

  const fetchList = async () => {
    await controller.getAllJobs()
  }

  // Pagination rule
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostPerPage] = useState(6)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = jobsStore.state.jobsList?.slice(firstPostIndex, lastPostIndex)

  // const handleFilter = () => {
  //   console.log(filter)
  //   if (currentPosts === null || currentPosts === '') {
  //     alert('caiu no if')
  //     setCurrentPage(jobsStore.state.jobsList?.slice(firstPostIndex, lastPostIndex))
  //   } else {
  //     alert('caiu no else')
  //     setCurrentPosts(currentPosts.filter((post) => post.title.includes(filter)))
  //   }
  // }

  const checkUser = () => {
    const token = getToken()

    if (token !== null) {
      return token
      // if (userStore.state.userInfo?.user?.subscripted?.status === true) {
      //   return JSON.parse(JSON.stringify(userStore.state?.userInfo?.user?.subscripted))
      // } else {
      //   return undefined
      // }
    } else {
      return undefined
    }
  }

  let checkIfUserIsPaid = checkUser()

  useEffect(() => {
    fetchList().then((r) => { })
    checkUser()
  }, [])


  return (
    <>
      <AppBarNavigation />
      <div className="header-jobs-page">
        <div className="header-jobs-page-column">
          <h2>
            Encontrar sua Primeira Vaga Tech <br /> nunca foi tão fácil
          </h2>
          {/* {isDesktop && */}
          <p>
            Oportunidades presenciais, remotas e híbridas, nacionais e internacionais.
          </p>
          {/* } */}
        </div>
        <img
          src={SitGuy}
          alt="Homem sentado em um cadeira"
          style={{ width: 218, height: 330 }}
        />
      </div>
      {/* <div className='filter-input-container'>
        <div className='top-of-filter-input'>
          <p>🔎 Filtro de Vagas - Busque pela sua favorita</p>
        </div>
        <input
          className='filter-input'
          type='text'
          placeholder='Pesquisar... 🌟'
          onKeyDown={(e) => e.code === 'Enter' && handleFilter()}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div> */}
      {checkIfUserIsPaid === undefined &&
        <Stack direction={'column'} textAlign={'center'} padding={2}>
          <p>
            🚩 Listamos algumas das diversas vagas disponíveis, para ver todas
            <b style={{ color: '#fff', marginLeft: '4px', cursor: 'pointer' }}>
              conheça os nossos planos
            </b>
          </p>
          <Link
            color={'#fff'}
            href='/plans'
            sx={{ textAlign: 'center', fontWeight: 600, fontSize: 14, marginY: 2 }}>
            Ver Planos
          </Link>
        </Stack >
      }

      <div className="filter-jobs-main-container">
        {jobsStore.loading ?
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          // onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          // <Box width={'50%'}>
          //   {currentPosts.map((index, _) => (
          //     <Stack key={index} spacing={1}>
          //       <Skeleton variant="circular" width={40} height={40} />
          //       <Skeleton variant="rounded" width={'90%'} height={60} />
          //       <Skeleton variant="text" width={80} sx={{ fontSize: '1rem' }} />
          //     </Stack>
          //   ))
          //   }
          // </Box>
          :
          checkIfUserIsPaid !== undefined ?
            (
              <div className="jobs-grid">
                {currentPosts?.map((job) => (
                  <BoxJobs
                    key={job._id}
                    img={job.urlImage ?? Logo}
                    name={job.name ?? 'Empresa Contrata'}
                    location={job.local ?? 'A combinar'}
                    title={job.title ?? 'Sem Título'}
                    type={job.type ?? ''}
                    tier={job.tier ?? ''}
                    salary={job.salary ?? ''}
                    description={job.description ?? 'Descrição não informada'}
                    link={job.link}
                  />
                ))}
              </div>
            ) :
            <div className="jobs-grid">
              {mockJobs.map((job) => (
                <BoxJobs
                  key={job.id}
                  img={job.img}
                  name={job.name}
                  tier={job.tier}
                  title={job.title}
                  salary={job.salary}
                  description={job.description}
                  location={job.location}
                  type={job.type}
                  link={job.link}
                />
              ))}
            </div>
        }
      </div>
      {checkIfUserIsPaid !== undefined ?
        <PaginationComponent
          totalPost={jobsStore.state.jobsList.length}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        /> :
        <div className='see-plans'>
          <p>
            Quer ter acesso a diversas outras vagas ?
          </p>
          <p
            onClick={() => navigate('/plans')}
            style={{ cursor: 'pointer', fontWeight: 600 }}
          >
            Conheça nossos planos!
          </p>
          <Button
            variant='contained'
            onClick={() => navigate('/plans')}
            sx={{ width: 200 }}
          >
            Ver Planos 💼
          </Button>
        </div>
      }

      <Footer />
    </>
  )
})

export default JobsPage
