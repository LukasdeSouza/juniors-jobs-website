import './style.css'

const Button = ({ handleClick, text }) => {
  return (
    <button className="btn btn-primary" type="button" onClick={handleClick}>
      <span className="btn-text">{text}</span>
    </button>
  )
}

export default Button
