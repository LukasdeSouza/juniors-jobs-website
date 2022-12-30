import React from "react"

import './style.css'
import imgTeamMenber from "../../assets/foto-footer-menbro-equipe.svg"

const TempArrayApiSimulation = [
    { gitHubLink: './', img: '', office: 'Product Maneger' },
    { gitHubLink: './', img: '', office: 'Product Maneger' },
    { gitHubLink: './', img: '', office: 'Product Maneger' },
    { gitHubLink: './', img: '', office: 'Product Maneger' },
    { gitHubLink: './', img: '', office: 'Product Maneger' },
    { gitHubLink: './', img: '', office: 'Product Maneger' },
    { gitHubLink: './', img: '', office: 'Product Maneger' },
    { gitHubLink: './', img: '', office: 'Product Maneger' },
    { gitHubLink: './', img: '', office: 'Product Maneger' }
]

const TeamMember = ({ menberOffice, memberGitHubLink = '', img = '' }) => {
    return (

        <a href='./' rel='external' /* target='_blank' */ className="team-member subtitle-02 px-2 py-1">
            <img src={imgTeamMenber} alt="" />
            {menberOffice}
        </a>
    )
}

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer__list-contribution-link">
                <a href="./" rel='external' /* target='_blank' */ className="subtitle-01">Ajude nosso projeto a evoluir</a>
                <a href="./" rel='external' /* target='_blank' */ className="subtitle-01">Contribuições e Parceiras</a>
            </section>
                <section className="member-section">
                    <div>
                        <h3 className="member-section__title title-h5 mb-3">Nossa equipe</h3>
                        <ul className="member-section__list">
                            {TempArrayApiSimulation.map((e, i) => <TeamMember key={i} menberOffice={e.office} img={e.img} />)}
                        </ul>
                    </div>
                <a href="./" rel="external" /* target='_blank' */ className="member-section__see-all ml-1">Ver todos</a>
                </section>
        </footer>
    )
}

export { Footer }