import { useForm } from 'react-hook-form'
import RegisterJobsImage from '../../../assets/register-jobs-image.svg'
import AppBarNavigation from '../../../components/general/appbar'
import Footer from '../../../components/general/footer'
import JobsController from '../../../controller/jobsController'
import './style.css'

const RegisterJobsPage = () => {
  const { register, handleSubmit } = useForm()
  const controller = new JobsController()

  const onSubmit = (e) => {
    console.log(e)
    controller.postNewJob(e)
  }

  const location = [
    { place: 'Remoto', value: 'remote' },
    { place: 'Híbrido', value: 'hybrid' },
    { place: 'Presencial', value: 'presential' }
  ]
  const tier = [
    { name: 'Júnior', value: 'junior' },
    { name: 'Pleno', value: 'pleno' },
    { name: 'Sênior', value: 'senior' }
  ]

  return (
    <div>
      <AppBarNavigation />
      <div className="container-text-image">
        <div>
          <h2>
            Os melhores candidatos <br /> você só encontra aqui
          </h2>
          <p>
            Com a nossa filtragem de candidatos basta você <br /> adicionar sua
            vaga que encontramos os candidatos <br /> ideais para sua empresa.
            Anuncie já.
          </p>
        </div>
        <img
          src={RegisterJobsImage}
          alt=""
          style={{ width: 255, height: 351 }}
        />
      </div>
      <form
        className="container-register-job"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="left-box-register-job">
          <h3>Cadastre uma nova Vaga</h3>

          <small>Logo da empresa (URL)</small>
          <input className="pl-2 input-component" {...register('logo')} />

          <small>Tipo da Vaga</small>
          <input className="pl-2 input-component" {...register('title')} />

          <small>Salário</small>
          <input className="pl-2 input-component" {...register('salary')} />

          <small>Link da Vaga</small>
          <input className="pl-2 input-component" {...register('link')} />
          <button>Adicionar Vaga</button>
        </div>

        <div className="right-box-register-job">
          <small>Descrição da Vaga</small>
          <input
            className="pl-2 input-component"
            {...register('description')}
          />

          <small>Tecnologia</small>
          <input
            className="pl-2 input-component"
            {...register('technologies')}
          />

          <small style={{ marginTop: '16px' }}>Local</small>
          <div className="radio-button-right-box-register-job">
            {location.map((local) => (
              <>
                <input
                  className="input-radio"
                  type="radio"
                  value={local.value}
                  {...register('local')}
                />
                <label>{local.place}</label>
              </>
            ))}
          </div>
          <small style={{ marginTop: '16px' }}>Nível do Cargo</small>
          <div className="radio-button-right-box-register-job">
            {tier.map((tr) => (
              <>
                <input
                  className="input-radio"
                  type="radio"
                  value={tr.value}
                  {...register('tier')}
                />
                <label>{tr.name}</label>
              </>
            ))}
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default RegisterJobsPage
