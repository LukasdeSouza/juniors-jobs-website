import './style.css'
import GitHubLogo from '../../../../assets/github-icon.svg'

const BoxTeams = ({ img, name, role, description }) => {
  return (
    <div className='jobs-grid-object'>
      <div className='jobs-grid-object-header'>
        <img src={img} alt='' style={{ width: 60 }} />
        <div className='jobs-grid-object-header-title-location'>
          <p>{name}</p>
          <small>{role}</small>
        </div>
      </div>
      <small className='jobs-grid-object-description'>
        {description}
      </small>
      <div className='jobs-grid-object-button-row'>
        <img src={GitHubLogo} alt="" style={{ width: 24 }} />
      </div>
    </div>
  )
}

export default BoxTeams