import React from "react";

import Direita from '../../../../assets/arrow-right.svg'
import Esquerda from '../../../../assets/arrow-left.svg'

import './style.css'

class PaginationJobs extends React.Component {
  constructor(props) {
    super(props)

    this.allElements = document.getElementsByClassName("bg-pagination")
  }

  async componentDidUpdate() {
    this.allElements[this.props.currentPage].className = "bg-pagination pagina-atual"
  }

  render() {
    return (
      <div
        className='flex flex-row justify-center align-items my-4'
      >
        {(this.props.currentPage === 0)
          ?
          <img className='arrows-disabled' src={Esquerda} />
          :
          <img className='arrows' src={Esquerda}
            onClick={() => this.props.setCurrentPage(this.props.currentPage - 1)}
          />
        }
        {Array.from(Array(this.props.pages), (item, index) => {
          return (
            <div
              id={index}
              key={index}
              onClick={() => this.props.setCurrentPage(Number(index))}
              className="bg-pagination"
            >
              {index + 1}
            </div>
          )
        })}
        {(this.props.currentPage + 1 === this.props.pages) ?
          <img className='arrows-disabled' src={Direita} /> :
          <img className='arrows' src={Direita}
            onClick={() => this.props.setCurrentPage(this.props.currentPage + 1)} />
        }
      </div>
    );
  }
}

export default PaginationJobs