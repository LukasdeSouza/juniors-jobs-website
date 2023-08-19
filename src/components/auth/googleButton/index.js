import './style.css'

import GoogleLogo from '../../../assets/icon-google.png'

const GoogleButton = ({ onClick }) => {
  return (
    <button className="pl-3 google-button" onClick={onClick}>
      <img src={GoogleLogo} alt="Logo da Google" />
      <span className="google-btn-text">Cadastrar com Google</span>
    </button>
  )
}

export default GoogleButton
