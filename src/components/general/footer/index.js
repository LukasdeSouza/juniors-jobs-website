import Facebook from './assets/facebook.svg'
import Instagram from './assets/instagram.svg'
import LinkedIn from './assets/linkedin.svg'
import Twitter from './assets/twitter 1.svg'

import '../../../styles/utility-classes.css'
import './style.css'
import { useScreenSize } from 'react-screen-size-helper'
import { breakpoints } from '../../../utils/breakpoints'

const Footer = () => {
  const { isDesktop } = useScreenSize({ breakpoints })

  return (
    <div className="footer_container">
      <div>
        <h3>Redes Sociais</h3>
        <img
          className="socialmedia-icon"
          src={Instagram}
          alt="Instagram Logo"
          onClick={() => window.open('https://www.instagram.com/seekjobsvagas/', '_blank')}
        />
        <img
          className="socialmedia-icon"
          src={Twitter}
          alt="Twitter Logo"
          onClick={() => window.open('https://twitter.com/SeekJobsCompany', '_blank')}
        />
      </div>
      <div className="for_companies">
        <h3>Para Empresas</h3>
        <a href="https://wa.me/5534992461158?text=Ol%C3%A1%21+Gostaria+de+publicar+uma+vaga+na+Seek+Jobs"
          target='_blank'
          className="color-white"
        >
          Anunciar Vagas
        </a>
      </div>
      <div className="for_candidates">
        <h3>Para Candidatos</h3>
        <a href="" className="color-white">
          Buscar Vagas
        </a>
      </div>
      {isDesktop &&
        <div className="for_contributors">
          <h2>Curtiu Nossa Proposta ?</h2>
          <small>
            <a href="">Ajude nos a mantê-la</a>
          </small>
          <h4>
            <strong>Seek Jobs</strong> é um projeto pessoal
          </h4>
          <small>
            Diversas pessoas contribuiram no desenvolvimento dessa plataforma{' '}
            <br /> ao assina-la você ajuda a comunidade de desenvolvedores a
            encontrar emprego <br /> na área de tecnologia, de forma simples e sem
            burocraria.
          </small>
          <a href="/plans" rel="noreferrer">
            <button className="want_to_contribute">Quero Assinar!</button>
          </a>
        </div>
      }

    </div>
  )
}

export default Footer
