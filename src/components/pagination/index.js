import React from 'react'
import './style.css'

const PaginationComponent = ({ totalPost, postsPerPage, currentPage, setCurrentPage }) => {
  let pages = []

  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pages.push(i)
  }
  return (
    <div className='pagination-container'>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            // className='button-pagination'
            className={page === currentPage ? 'active-button-pagination' : 'button-pagination'}
            onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        )
      })}
    </div>
  )
}

export default PaginationComponent