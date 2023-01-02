import React from "react"

import './style.css'
import imgTeamMenber from "../../assets/foto-footer-menbro-equipe.svg"

const TempArrayApiSimulation = [
    { gitHubLink: './', img: '', office: 'Product Maneger', alt: '' },
    { gitHubLink: './', img: '', office: 'Product Maneger', alt: '' },
    { gitHubLink: './', img: '', office: 'Product Maneger', alt: '' },
    { gitHubLink: './', img: '', office: 'Product Maneger', alt: '' },
    { gitHubLink: './', img: '', office: 'Product Maneger', alt: '' },
    { gitHubLink: './', img: '', office: 'Product Maneger', alt: '' },
    { gitHubLink: './', img: '', office: 'Product Maneger', alt: '' },
    { gitHubLink: './', img: '', office: 'Product Maneger', alt: '' },
    { gitHubLink: './', img: '', office: 'Product Maneger', alt: '' }
]

const TeamMember = ({ menberOffice, memberGitHubLink = '', img = '', alt='Foto do membro da equipe' }) => {
    return (                                              
        <a href='./' rel='external' /* target='_blank' */ className="member-list__team-member subtitle-02 px-2 py-1">
            {/* A tag img deve ter a logica refatorada quando a api entiver plenamente funcional  */}
            <img src={imgTeamMenber} alt={alt} />
            {menberOffice}
        </a>
    )
}

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer__list-contribution">
                <a href="./" rel='external' /* target='_blank' */ className="subtitle-01">Ajude nosso projeto a evoluir</a>
                <a href="./" rel='external' /* target='_blank' */ className="subtitle-01">Contribuições e Parceiras</a>
            </section>
            <section className="footer__member-section">
                <div>
                    <h3 className="member-section__title title-h5 mb-3">Nossa equipe</h3>
                    <ul className="member-section__member-list">
                        {TempArrayApiSimulation.map((e, i) => <li key={i}><TeamMember  menberOffice={e.office} img={e.img} /></li>)}
                    </ul>
                </div>
                <a href="./" rel="external" /* target='_blank' */ className="member-section__see-all ml-1">Ver todos</a>
            </section>
        </footer>
    )
}

export { Footer }