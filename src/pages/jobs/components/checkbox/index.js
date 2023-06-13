import './style.css'

const CheckboxFilter = ({ small }) => {
  return (
    <div className="filter-jobs-checkbox-container">
      <input type="checkbox" />
      <small>{small}</small>
    </div>
  )
}

export default CheckboxFilter
