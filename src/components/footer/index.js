import React from "react"

import './style.css'

const TempArrayApiSimulation = [
 {gitHubLink: './', img:'', office: 'Product Maneger'},
 {gitHubLink: './', img:'', office: 'Product Maneger'},
 {gitHubLink: './', img:'', office: 'Product Maneger'},
 {gitHubLink: './', img:'', office: 'Product Maneger'},
 {gitHubLink: './', img:'', office: 'Product Maneger'},
 {gitHubLink: './', img:'', office: 'Product Maneger'},
 {gitHubLink: './', img:'', office: 'Product Maneger'},
 {gitHubLink: './', img:'', office: 'Product Maneger'},
 {gitHubLink: './', img:'', office: 'Product Maneger'}
]

const TeamMember = ({menberOffice, memberGitHubLink='', img=''}) => {
    return (
        /* href = memberGitHubLink */
        <a href='./' rel='external' /* target='_blank' */ className="team-member">{menberOffice}</a>
    )
}

const Footer = () => {
    return (
        <footer>
            <div>
                <a href="./" rel='external' /* target='_black' */>Ajude nosso projeto a evoluir</a>
                <a href="./" rel='external' /* target='_black' */>Contribuições e Parceiras</a>
            </div>
            <div>
                <h1>Nossa equipe</h1>
                <ul>
                {TempArrayApiSimulation.map((e) => <TeamMember menberOffice={e.office}/>)}
                </ul>
            </div>
        </footer>
    )
}

export { Footer }