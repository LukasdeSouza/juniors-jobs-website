import './style.css'
import AppBarNavigation from '../../components/general/appbar'
import TeamImg from '../../assets/our-team-img.svg'

const OurTeamPage = () => {
  return (
    <>
      <AppBarNavigation />
      <div className='container-header-ourteam'>
        <div className='header-ourteam-text'>
          <h2>Nossa Equipe</h2>
          <p>Aqui você encontra todos(a) integrantes que <br /> participam constantemente do Seek Jobs</p>
        </div>
        <img src={TeamImg} alt="" style={{ width: 400 }} />
      </div>
    </>
  )
}

export default OurTeamPage