import Facebook from "./assets/facebook.svg";
import Instagram from "./assets/instagram.svg";
import LinkedIn from "./assets/linkedin.svg";
import Twitter from "./assets/twitter 1.svg";

import "../../../styles/utility-classes.css";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div>
        <h3>Redes Sociais</h3>
        <img src={Facebook} alt="Facebook Logo" />
        <img src={Instagram} alt="Instagram Logo" />
        <img src={LinkedIn} alt="LinkedIn Logo" />
        <img src={Twitter} alt="Twitter Logo" />
      </div>
      <div className="for_companies">
        <h3>Para Empresas</h3>
        <a href="" className="color-white">
          Anunciar Vagas
        </a>
      </div>
      <div className="for_candidates">
        <h3>Para Candidatos</h3>
        <a href="" className="color-white">
          Buscar Vagas
        </a>
      </div>
      <div className="for_contributors">
        <h2>Curtiu Nossa Proposta ?</h2>
        <small>
          <a href="">Ajude nos a mantê-la</a>
        </small>
        <h4>
          <strong>Seek Jobs</strong> é um projeto Open Source
        </h4>
        <small>
          O seek jobs é um site gratuito de código aberto <br /> construido pela
          comunidade de desenvolvedores, nosso objetivo  <br /> é ajudar a
          comunidade de desenvolvedores a encontrar emprego <br /> na área de
          forma simples e sem burocraria. Nosso site <br /> é mantido com a
          ajude de pessoas como você, então <br /> considere nos ajudar.
        </small>
        <button class="want_to_contribute">Quero contribuir!</button>
        <small>
          <p className="mt-2">Ou pelo pix da nossa vaquinha online: </p>
        </small>
        <a
          href="https://www.vakinha.com.br/3344996"
          target="_blank"
          className="color-white text-underline mt-1"
        >
          3344996@vakinha.com.br{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
