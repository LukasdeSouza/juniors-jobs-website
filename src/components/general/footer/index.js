import Facebook from './assets/facebook.svg'
import Instagram from './assets/instagram.svg'
import LinkedIn from './assets/linkedin.svg'
import Twitter from './assets/twitter 1.svg'

import './style.css'

const Footer = () => {
    return (
        <div className="footer_container">
            <div>
                <h3>Redes Sociais</h3>
                <img src={Facebook} alt="Facebook Logo" width='28px' />
                <img src={Instagram} alt="Instagram Logo" width='28px' />
                <img src={LinkedIn} alt="LinkedIn Logo" width='28px' />
                <img src={Twitter} alt="Twitter Logo" width='28px' />
            </div>
            <div className="for_companies">
                <h3>Para Empresas</h3>
                <h5><a href="">Anunciar Vaga</a></h5>
            </div>
            <div className='for_candidates'>
                <h3 >Para Candidatos</h3>
                <h5><a href="">Buscar Vagas</a></h5>
            </div>
            <div className='for_contributors'>
                <h1>Curtiu Nossa Proposta ?</h1>
                <small><a href="">Ajude nos a mantê-lo</a></small>
                <h4> <b>Seek Jobs</b> é um projeto Open Source</h4>
                <small>O seek jobs é um site gratuito de código aberto <br /> construido pela comunidade de desenvolvedores, nosso objetivo é ajudar a <br />comunidade de desenvolvedores a encontrar emprego <br /> na área de forma simples e sem burocraria. Nosso site <br /> é mantido com a ajude de pessoas como você, então <br /> considere nos ajudar.</small>
                <button class='want_to_contribute'>Quero contribuir!</button>
                <small style={{ color: "#fff", marginTop: '8px' }}>Ou pelo pix da nossa vaquinha online: </small>
                <small> <a href="">3344996@vakinha.com.br </a></small>
            </div>
        </div>
    )
}

export default Footer