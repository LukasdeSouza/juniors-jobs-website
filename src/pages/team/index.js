import './style.css'
import User from '../../assets/our-team-img.svg'
import AppBarNavigation from '../../components/general/appbar'
import TeamImg from '../../assets/our-team-img.svg'
import BoxTeams from './components/box'
import Footer from '../../components/general/footer'

const OurTeamPage = () => {
  //vou refatorar o código, fiz na correria pois estou com pouco tempo e gostaria de ver pelo menos o MVP deste projeto
  const ourTeamInfo = [
    {
      img: User, name: "Lucas", role: 'FullStack Developer',
      description: 'Inicializador do Projeto Seek Jobs, desenvolvedor Frontend atuando também em toda a estrutura de backend e devOps do projeto.', githubLink: 'https://github.com/LukasdeSouza'
    },
    {
      img: User, name: "Victor", role: "UX",
      description: "UX Design, Code Reviewer, Product Manager do projeto Seek Jobs. Atualmente na criação de interfaces do projeto, gerenciamento do produto, inclusão de novidades e features na plataforma.", githubLink: 'https://github.com/Victorprog4'
    },
    {
      img: User, name: "Arthur", role: '',
      description: "Ajudou na propagação do projeto desde o início, convidando outras pessoas a fazer parte deste projeto voluntário, recrutando outros desenvolvedor, criando documentação, auxiliando em todo o projeto Seek Jobs.",
      githubLink: 'https://github.com/arthurfp16'
    },
    {
      img: User, name: "Raul", role: 'UX Design',
      description: "Ajudou na refatoração de todo o projeto e protótipo do projeto no Figma, trazendo uma nova interface para o Seek Jobs, criando novas telas e novos fluxos de experiência do usuário.",
      githubLink: 'https://github.com/RaullPereira'
    },
  ]

  const OurTeamInfoSecondary = [
    {
      img: User, name: "Afra Taiza", role: "Frontend Developer",
      description: "Desenvolvedor Frontend, trabalhou principalmente nas telas de Login, Cadastro de usuário, autenticação via OAuth utilizando a Google, etc.", githubLink: 'https://github.com/afrataiza'
    },
    {
      img: "https://avatars.githubusercontent.com/u/94249557?s=400&u=72f47fb4e4ed4bb314de7ddae4eee7d033106348&v=4", name: "Anderson", role: "Frontend Developer",
      description: "Desenvolvedor Frontend que adicionou diversas contribuições ao projeto, aprimorou a páginação, corrigiu erros no código, adicionou também o footer e diversas outras funcionalidades relevantes.", githubLink: 'https://github.com/Andersson793'
    },
    {
      img: User, name: "Richard", role: "Frontend Developer",
      description: 'Desenvolvedor Frontend responsável pela parte de criação de novas vagas de emprego no projeto Seek Jobs, utilizando a biblioteca React Hook Form.', githubLink: "https://github.com/richaardev"
    },
    {
      img: User, name: "Abraão", role: "Code Reviewr",
      description: "Codereviews do Projeto, ajudando na manutenção e qualidade do código, na adição de novos colaboradores para o projeto, além de ajudar no aprimoramento de novas funcionalidades ao Seek Jobs.", githubLink: 'https://github.com/orgs/seek-jobs-open-source/people/devrubens'
    }
  ]

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
      <Footer />
    </>
  )
}

export default OurTeamPage