import './style.css'
import GitHubLogo from '../../../../assets/github-icon.svg'

const BoxTeams = ({ img, name, role, description, githubLink }) => {
  return (
    <div className='jobs-grid-object'>
      <div className='jobs-grid-object-header'>
        <img src={img} alt='' style={{ width: 60, borderRadius : "50%" }} />
        <div className='jobs-grid-object-header-title-location'>
          <p>{name}</p>
          <small>{role}</small>
        </div>
      </div>
      <small className='jobs-grid-object-description'>
        {description}
      </small>
      <div className='jobs-grid-object-button-row'>
        <a href={githubLink}>
          <img src={GitHubLogo} alt="" style={{ width: 24 }} />
        </a>
      </div>
    </div>
  )
}

export default BoxTeams