import Button from '../../../../components/general/button'
import CheckboxFilter from '../checkbox'

import './style.css'

const FilterJobs = () => {
  return (
    <div className="filter-jobs-container">
      <div className="filter-jobs-header">
        <h4>Filtrar Vagas</h4>
        <Button text={'Limpar'} />
      </div>
      <p>Salário</p>
      <CheckboxFilter small={'Até R$ 1.000'} />
      <CheckboxFilter small={'A partir de R$ 1.000'} />
      <CheckboxFilter small={'A partir de R$ 2.000'} />
      <CheckboxFilter small={'A partir de R$ 3.000'} />
      <CheckboxFilter small={'A partir de R$ 4.000'} />
      <CheckboxFilter small={'A partir de R$ 5.000'} />
      <CheckboxFilter small={'Entre R$ 5.000 e R$10.000'} />
      <p>Tipo de Vaga</p>
      <CheckboxFilter small={'Remoto'} />
      <CheckboxFilter small={'Presencial'} />
      <CheckboxFilter small={'Híbrido'} />
      <p>Tipo de Contrato</p>
      <CheckboxFilter small={'PJ'} />
      <CheckboxFilter small={'CLT'} />
      <CheckboxFilter small={'Freelancer'} />
      <p>Níveis</p>
      <CheckboxFilter small={'Júnior'} />
      <CheckboxFilter small={'Pleno'} />
      <CheckboxFilter small={'Sênior'} />
    </div>
  )
}

export default FilterJobs
