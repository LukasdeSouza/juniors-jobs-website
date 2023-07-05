import './style.css'

const Input = ({ type, placeHolder, name, handleChange, style }) => {
  return (
    <input
      className="pl-2 input-component"
      type={type}
      placeholder={placeHolder}
      name={name}
      onChange={handleChange}
    />
  )
}

export default Input
