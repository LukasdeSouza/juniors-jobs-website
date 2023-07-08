import { useContext, useEffect } from 'react'

import { observer } from 'mobx-react-lite'

import AppBarNavigation from '../../components/general/appbar'

import JobsController from '../../controller/jobsController'
import RootStoreContext from '../../store/rootStore'

import Logo from '../../assets/logo_size-removebg.png'
import SitGuy from '../../assets/sit-in-a-char-man-jobs-page.svg'
import Footer from '../../components/general/footer'
import '../../styles/global.css'
import BoxJobs from './components/box'
import './styles.css'

const JobsPage = observer(() => {
  const { jobsStore } = useContext(RootStoreContext)
  const controller = new JobsController(jobsStore)

  const fetchList = async () => {
    await controller.getAllJobs()
  }

  // Pagination rule
  // const [itemsPerPage, setItemsPerPage] = useState(10)
  // const [currentPage, setCurrentPage] = useState(0)

  // const pages = Math.ceil(jobsStore.state.jobsList.length / itemsPerPage)
  // const startIndex = currentPage * itemsPerPage
  // const endIndex = startIndex + itemsPerPage
  // const currentItems = jobsStore.state.jobsList.slice(startIndex, endIndex)

  useEffect(() => {
    fetchList()
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

  return (
    <>
      <AppBarNavigation />
      <div className="header-jobs-page">
        <div className="header-jobs-page-column">
          <h2>
            Buscar Emprego na área Tech <br /> nunca foi tão fácil
          </h2>
          <p>
            Seek Jobs é uma nova maneira de encontrar <br />
            empregos na área de tecnologia sem burocracias <br />e dores de
            cabeça, e com mais praticidade
          </p>
        </div>
        <img
          src={SitGuy}
          alt="Homem sentado em um cadeira"
          style={{ width: 238, height: 350 }}
        />
      </div>

      <div className="filter-jobs-main-container">
        {jobsStore.loading ? (
          <span className="loader"></span>
        ) : (
          <div className="jobs-grid">
            {jobsStore.state.jobsList?.map((job) => (
              <BoxJobs
                key={job.name ?? 'N/A'}
                img={job.urlImage ?? Logo}
                name={job.name ?? 'Empresa Contrata'}
                location={job.local === 'A combinar' ? 'Presencial' : job.local}
                title={job.title ?? 'Sem Título'}
                type={job.type ?? 'N/A'}
                tier={job.tier ?? 'N/A'}
                salary={job.salary ?? 'N/A'}
                description={job.description ?? 'Descrição não informada'}
                link={job.link}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  )
})

export default JobsPage
