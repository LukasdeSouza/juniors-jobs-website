import { Link, Tooltip } from '@mui/material'
import './style.css'
import { useScreenSize } from 'react-screen-size-helper'
import { breakpoints } from '../../../../utils/breakpoints'

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
  const { isDesktop } = useScreenSize({ breakpoints })

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
    <Tooltip
      title={
        <Link color={'#fff'} underline="none">
          {' '}
          💻 <b>Requisitos:</b> {description}. <b> 👆 Clique para saber mais</b>{' '}
        </Link>
      }
      placement="top-start"
      arrow={true}
      enterDelay={200}
      followCursor={true}
    >
      <div className="jobs-grid-object"
        onClick={() => handleClick()}
      >
        <div className="jobs-grid-object-header">
          <img
            src={img}
            alt=""
            style={{ width: 60, borderRadius: '16px', marginRight: '8px' }}
          />
          <div className="jobs-grid-object-header-title-location">
            <p>{name}</p>
            <small>{location}</small>
          </div>
        </div>
        <p className="jobs-grid-object-title">{title}</p>

        <div className="jobs-grid-chips-info">
          {type !== '' &&
            <small className="jobs-grid-object-type">
              {type}
            </small>
          }
          {tier !== '' &&
            <small className="jobs-grid-object-tier">
              {tier}
            </small>
          }
          {isDesktop &&
            <>
              <small className="jobs-grid-object-location">{location}</small>
              {salary !== '' &&
                <small className="jobs-grid-object-salary">
                  {salary}
                </small>
              }
            </>
          }
        </div>
      </div>
    </Tooltip>
  )
}

export default BoxJobs
