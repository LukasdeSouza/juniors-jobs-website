import './style.css'

const ButtonOutlined = ({ handleClick, text }) => {
  return (
    <button
      className="btn btn-secundary"
      type="button"
      onClick={handleClick}
      style={{ marginLeft: '8px' }}
    >
      <span className="btn-outlined-text">
        {text}
      </span>
    </button>
  );
}


export default ButtonOutlined