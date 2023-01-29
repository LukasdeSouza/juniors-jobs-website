import AppBarNavigation from '../../../components/general/appbar'
import Input from '../../../components/general/input'
import Footer from '../../../components/general/footer'
import './style.css'

import RegisterJobsImage from '../../../assets/register-jobs-image.svg'

const RegisterJobs = () => {
  return (
    <div>
      <AppBarNavigation />
      <div className='container-text-image'>
        <div>
          <h2>Os melhores candidatos <br /> você só encontra aqui</h2>
          <p>Com a nossa filtragem de candidatos basta você <br /> adicionar sua vaga que encontramos os candidatos <br /> ideais para sua empresa. Anuncie já.</p>
        </div>
        <img src={RegisterJobsImage} alt="" style={{ width: 255, height: 351 }} />
      </div>
      <div className='container-register-job'>
        <div className="left-box-register-job">
          <h3>Cadastre uma nova Vaga</h3>
          <small>Logo da empresa (URL)</small>
          <Input />
          <small>Tipo da Vaga</small>
          <Input />
          <small>Salário</small>
          <Input />
          <small>Link da Vaga</small>
          <Input />
          <button>Adicionar Vaga</button>
        </div>
        <div className="right-box-register-job">
          <small>Descrição da Vaga</small>
          <Input />
          <small>Tecnologia</small>
          <Input />
          <small style={{ marginTop: '16px' }}>Local</small>
          <div className="radio-button-right-box-register-job">
            <input className='input-radio' type="radio" value='Remoto' />
            <label htmlFor="">Remoto</label>
            <input className='input-radio' type="radio" value='Presencial' />
            <label htmlFor="">Presencial</label>
            <input className='input-radio' type="radio" value='Híbrido' />
            <label htmlFor="">Híbrido</label>
          </div>
          <small style={{ marginTop: '16px' }}>Nível do Cargo</small>
          <div className="radio-button-right-box-register-job">
            <input className='input-radio' type="radio" value='Estagiário' />
            <label htmlFor="">Estagiário</label>
            <input className='input-radio' type="radio" value='Júnior' />
            <label htmlFor="">Júnior</label>
            <input className='input-radio' type="radio" value='Pleno' />
            <label htmlFor="">Pleno</label>
            <input className='input-radio' type="radio" value='Sênior' />
            <label htmlFor="">Sênior</label>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RegisterJobs