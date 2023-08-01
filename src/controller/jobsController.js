import axios from 'axios'
import { baseUrlProd } from '../utils/constants'
import { toast } from 'react-hot-toast'

class JobsController {
  constructor(store) {
    this.store = store
  }

  async getAllJobs() {
    this.store.setLoading(true)

    await fetch(`${baseUrlProd}/jobs`)
      .then((response) => response.json())
      .then((data) => this.store.setState('jobsList', data))
      .catch(() => toast.error('Faça Login para ter acesso a todas as vagas'))
      .finally(() => this.store.setLoading(false))
  }

  async postNewJob(body) {
    return await axios
      .post(`${baseUrlProd}/jobs`, body)
      .then((response) => {
        toast.success('Vaga criada com Sucesso')
        console.log(response)
      })
      .catch((error) => {
        toast.error('Erro ao Criar Vaga')
      })
  }

  async deleteJob(id) {
    return await axios
      .delete(`${baseUrlProd}/jobs/${id}`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => toast.error('Erro ao Deletar Vaga'))
      .finally(() => this.store.setLoading(false))
  }
}

export default JobsController
