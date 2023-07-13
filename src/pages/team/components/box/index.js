import { Link, Tooltip } from '@mui/material'
import GitHubLogo from '../../../../assets/github-icon.svg'
import './style.css'

const BoxTeams = ({ img, name, role, description, githubLink }) => {
  return (
    <Tooltip
      title={
        <Link color={'#fff'} underline="none">
          {role}
          {/* <b> Veja o Github através do ícone abaixo 👇 </b> */}
        </Link>
      }
      followCursor
    >
      <div className="jobs-grid-team-object">
        <div className="jobs-grid-team-object-header">
          <img src={img} alt="" style={{ width: 60, borderRadius: '50%' }} />
          <div className="jobs-grid-team-object-header-title-location">
            <p>{name}</p>
            <small>{role}</small>
          </div>
        </div>
        <small className="jobs-grid-team-object-description">
          {description}
        </small>
        <div className="jobs-grid-team-object-button-row">
          <a href={githubLink}>
            <img src={GitHubLogo} alt="" style={{ width: 24 }} />
          </a>
        </div>
      </div>
    </Tooltip>
  )
}

export default BoxTeams
