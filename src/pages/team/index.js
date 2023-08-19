import TeamImg from '../../assets/our-team-img.svg'
import AppBarNavigation from '../../components/general/appbar'
import Footer from '../../components/general/footer'
import {
  ourTeamInfo,
  OurTeamInfoSecondary,
  ourTeamInfoTertiary
} from '../../utils/constants'
import BoxTeams from './components/box'
import './style.css'

const OurTeamPage = () => {
  return (
    <>
      <AppBarNavigation />
      <div className="container-header-ourteam">
        <div className="header-ourteam-text">
          <h2>Nossa Equipe</h2>
          <p>
            Aqui você encontra todos(a) integrantes que <br /> participam
            constantemente do Seek Jobs <br />
            e colaboraram voluntáriamente com o aprimoramento do projeto. <br />
            Abaixo também se encontra o Github de cada um deles.
          </p>
        </div>
        <img src={TeamImg} alt="Imagem para Times" style={{ width: 300 }} />
      </div>
      <div className="grid-our-team-boxes">
        {ourTeamInfo.map((info) => (
          <BoxTeams
            key={info.name}
            img={info.img}
            name={info.name}
            role={info.role}
            description={info.description}
            githubLink={info.githubLink}
          />
        ))}
      </div>
      <div className="grid-our-team-boxes-secondary">
        {OurTeamInfoSecondary.map((info) => (
          <BoxTeams
            key={info.name}
            img={info.img}
            name={info.name}
            role={info.role}
            description={info.description}
            githubLink={info.githubLink}
          />
        ))}
      </div>
      <div className="grid-our-team-boxes-secondary">
        {ourTeamInfoTertiary.map((info) => (
          <BoxTeams
            key={info.name}
            img={info.img}
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
