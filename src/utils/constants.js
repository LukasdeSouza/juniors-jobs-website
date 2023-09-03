import User from '../assets/our-team-img.svg'

const baseUrlProd = 'https://busy-teal-crocodile-hat.cyclic.app'
const baseUrlDev = 'http://localhost:4000'

const ourTeamInfo = [
  {
    img: User,
    name: 'Lucas',
    role: 'FullStack Developer',
    description:
      'Inicializador do Projeto Seek Jobs, desenvolvedor Frontend atuando também em toda a estrutura de backend e devOps do projeto.',
    githubLink: 'https://github.com/LukasdeSouza'
  },
  {
    img: User,
    name: 'Arthur',
    role: 'Recrutador e Entusiasta do Projeto',
    description:
      'Ajudou na propagação do projeto desde o início, convidando outras pessoas a fazer parte deste projeto voluntário, recrutando outros desenvolvedor, criando documentação, auxiliando em todo o projeto Seek Jobs.',
    githubLink: 'https://github.com/arthurfp16'
  },
  {
    img: User,
    name: 'Afra Taiza',
    role: 'Frontend Developer',
    description:
      'Desenvolvedor Frontend, trabalhou principalmente nas telas de Login, Cadastro de usuário, autenticação via OAuth utilizando a Google, etc.',
    githubLink: 'https://github.com/afrataiza'
  }
]

const OurTeamInfoSecondary = [
  {
    img: 'https://avatars.githubusercontent.com/u/94249557?s=400&u=72f47fb4e4ed4bb314de7ddae4eee7d033106348&v=4',
    name: 'Anderson',
    role: 'Frontend Developer',
    description:
      'Desenvolvedor Frontend que adicionou diversas contribuições ao projeto, aprimorou a páginação, corrigiu erros no código, adicionou também o footer e diversas outras funcionalidades relevantes.',
    githubLink: 'https://github.com/Andersson793'
  }
]

const ourTeamInfoTertiary = [
  {
    img: User,
    name: 'Victor',
    role: 'UX/UI',
    description:
      'UX Design, Code Reviewer, Product Manager do projeto Seek Jobs. Atualmente na criação de interfaces do projeto, gerenciamento do produto, inclusão de novidades e features na plataforma.',
    githubLink: 'https://github.com/Victorprog4'
  },
  {
    img: User,
    name: 'Richard',
    role: 'Frontend Developer',
    description:
      'Desenvolvedor Frontend responsável pela parte de criação de novas vagas de emprego no projeto Seek Jobs, utilizando a biblioteca React Hook Form.',
    githubLink: 'https://github.com/richaardev'
  },
  {
    img: User,
    name: 'Diego Natalo',
    role: 'Frontend Developer',
    description:
      'Desenvolvedor Frontend responsável pela implementação de diversas melhorias (features) e correções no projeto.',
    githubLink: 'https://github.com/diegonatalo'
  },
  {
    img: User,
    name: 'Raul',
    role: 'UX Design',
    description:
      'Ajudou na refatoração de todo o projeto e protótipo do projeto no Figma, trazendo uma nova interface para o Seek Jobs, criando novas telas e novos fluxos de experiência do usuário.',
    githubLink: 'https://github.com/RaullPereira'
  }
]

export { baseUrlProd, baseUrlDev, ourTeamInfo, OurTeamInfoSecondary, ourTeamInfoTertiary }
