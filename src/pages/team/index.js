import './style.css'
import User from '../../assets/our-team-img.svg'
import AppBarNavigation from '../../components/general/appbar'
import TeamImg from '../../assets/our-team-img.svg'
import BoxTeams from './components/box'
import Footer from '../../components/general/footer'

const OurTeamPage = () => {
  //vou refatorar o código, fiz na correria pois estou com pouco tempo e gostaria de ver pelo menos o MVP deste projeto
  const ourTeamInfo = [
    { img: User, name: "Lucas", role: 'FullStack Developer', description: 'Inicializador do Projeto Seek Jobs' },
    { img: User, name: "Victor", role: "UX", description: "UX Design, Code Reviewer, Product Manager" },
    { img: User, name: "Arthur", role: '', description: "Ajudou na propagação do projeto, chamando outras pessoas para fazer parte do Seek Jobs" },
  ]

  const OurTeamInfoSecondary = [
    { img: User, name: "Afra Taiza", role: "Frontend Developer", description: "Desenvolvedor Frontend que adicionou contribuições ao projeto" },
    { img: User, name: "Anderson", role: "Frontend Developer", description: "Desenvolvedor Frontend que adicionou contribuições ao projeto" },
    { img: User, name: "Richard", role: "Frontend Developer", description: 'Desenvolvedor Frontend que adicionou contribuições ao projeto' },
    { img: User, name: "Abraão", role: "Code Reviewr", description: "Codereviews do Projeto, ajudando na manutenção e qualidade do código" }
  ]

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
      <div className='grid-our-team-boxes'>
        {ourTeamInfo.map((info) => (
          <BoxTeams img={info.img}
            name={info.name}
            role={info.role}
            description={info.description}
          />
        ))}
      </div>
      <div className='grid-our-team-boxes-secondary'>
        {OurTeamInfoSecondary.map((info) => (
          <BoxTeams img={info.img}
            name={info.name}
            role={info.role}
            description={info.description}
          />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default OurTeamPage