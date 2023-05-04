import './style.css'
import User from '../../assets/our-team-img.svg'
import AppBarNavigation from '../../components/general/appbar'
import TeamImg from '../../assets/our-team-img.svg'
import BoxTeams from './components/box'
import Footer from '../../components/general/footer'
import { OurTeamInfoSecondary, ourTeamInfo, ourTeamInfoTertiary } from '../../utils/constants'

const OurTeamPage = () => {

  return (
    <>
      <AppBarNavigation />
      <div className='container-header-ourteam'>
        <div className='header-ourteam-text'>
          <h2>Nossa Equipe</h2>
          <p>Aqui você encontra todos(a) integrantes que <br /> participam constantemente do Seek Jobs <br />
            e colaboraram voluntáriamente com o aprimoramento do projeto. <br />
            Abaixo também se encontra o Github de cada um deles.</p>
        </div>
        <img src={TeamImg} alt="" style={{ width: 400 }} />
      </div>
      <div className='grid-our-team-boxes'>
        {ourTeamInfo.map((info) => (
          <BoxTeams img={info.img}
            name={info.name}
            role={info.role}
            description={info.description}
            githubLink={info.githubLink}
          />
        ))}
      </div>
      <div className='grid-our-team-boxes-secondary'>
        {OurTeamInfoSecondary.map((info) => (
          <BoxTeams img={info.img}
            name={info.name}
            role={info.role}
            description={info.description}
            githubLink={info.githubLink}
          />
        ))}
      </div>
      <div className='grid-our-team-boxes-secondary'>
        {ourTeamInfoTertiary.map((info) => (
          <BoxTeams img={info.img}
            name={info.name}
            role={info.role}
            description={info.description}
            githubLink={info.githubLink}
          />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default OurTeamPage