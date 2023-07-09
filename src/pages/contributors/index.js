import AppBarNavigation from '../../components/general/appbar'

import ContributeImg from '../../assets/img-sec-contribuicao.png'

import './index.css'

import '../../styles/responsive.css'
import '../../styles/utility-classes.css'

export default function ContributorsPage() {
  return (
    <>
      <AppBarNavigation />
      <section className="contain-contributions py-8">
        <div>
          <img src={ContributeImg} alt="" />
        </div>
        <div className="area-text-contributions">
          <div className="separador-blue">
            <h2
              className="title-h4 ml-1"
              style={{ color: 'var(--black-scale-300)' }}
            >
              Curtiu o Site ?
            </h2>
            <span className="subtitle-02 mt-1 ml-1">Ajude nos a mantê-lo!</span>
          </div>
          <p className="title-h5 mt-6">
            <span className="subtitle-01 --color-blue-300">Seek Jobs</span> é um
            Projeto Open-Source
          </p>
          <p
            className="pt-3 subtitle-02 responsive-p"
            style={{ color: 'var(--black-scale-300)', fontWeight: 400 }}
          >
            A Junior Jobs é um site gratuito de código aberto construído pela
            comunidade, nosso objetivo é ajudar a comunidade de desenvolvedores
            a encontrar emprego na área de forma simples e sem burocracia. Nosso
            site é mantido com a ajuda de pessoas como você, então considere nos
            ajudar.
          </p>
          <a
            href="https://www.vakinha.com.br/3344996"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-primary mt-4">Quero contribuir!</button>
          </a>
          <p className="subtitle-02 link-da-vakinha mt-4">
            ou pelo pix da nossa Vakinha online <br></br>
            <a
              href="https://www.vakinha.com.br/3344996"
              target="_blank"
              rel="noopener noreferrer"
            >
              3344996@vakinha.com.br
            </a>
          </p>
          <p className="subtitle-02 link-da-vakinha mt-4">
            Buy me a Coffee! <br></br>
            <a
              href="https://www.buymeacoffee.com/seekjobs"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.buymeacoffee.com/seekjobs
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
