import './style.css'

const BoxJobs = ({
  img,
  name,
  location,
  title,
  type,
  tier,
  salary,
  description,
  link
}) => {
  const handleClick = () => {
    if (/^[0-9]+$/.test(link)) {
      window.open(
        `https://wa.me/55${link}?text=Ol%C3%A1%2C+vim+pela+vaga+que+vi+na+Seek+Jobs$`,
        '_blank'
      )
    } else if (link.includes('http')) {
      window.open(link, '_blank')
    }
  }

  return (
    <div className="jobs-grid-object">
      <div className="jobs-grid-object-header">
        <img src={img} alt="" style={{ width: 60 }} />
        <div className="jobs-grid-object-header-title-location">
          <p>{name}</p>
          <small>{location}</small>
        </div>
      </div>
      <p className="jobs-grid-object-title">{title}</p>

      <div className="jobs-grid-chips-info">
        <small className="jobs-grid-object-type">{type}</small>
        <small className="jobs-grid-object-tier">{tier}</small>
        <small className="jobs-grid-object-location">{location}</small>
        <small className="jobs-grid-object-salary">{salary}</small>
      </div>
      {/* <small className="jobs-grid-object-description">{description}</small> */}
      {/* <div className="jobs-grid-object-button-row">
        <Button text={'Aplicar'} handleClick={handleClick} />
        <ButtonOutlined text={'Detalhes'} />
      </div> */}
    </div>
  )
}

export default BoxJobs
