import React from 'react'
import './style.css'
import Button from '../../components/general/button'

const CoursesPage = () => {
  return (
    <div className='general-container'>
      <div className='header-container-courses-page'>
        <h1>Do 0 ao Frontend</h1>
        <h3>Desbloquei seu caminho no Frontend</h3>
        {/* <h3>ou seu dinheiro de volta</h3> */}
        <Button text={'Quero Desbloquear ⚔️'} />
      </div>
      <div>
        <h3>É momento de sair dos tutoriais</h3>
        <h3>e criar Projetos de Verdade</h3>
        <h3>Aprender com quem já está no Mercado</h3>
        <h3>e se destacar dos outros Programadores</h3>
        <Button text={'Quero Me Destacar ⚔️'} />
      </div>
    </div>
  )
}

export default CoursesPage