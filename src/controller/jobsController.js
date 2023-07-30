import axios from 'axios'
import { baseUrl } from '../utils/constants'
import { toast } from 'react-hot-toast'

class JobsController {
  constructor(store) {
    this.store = store
  }

  async getAllJobs() {
    this.store.setLoading(true)

    await fetch(`${baseUrl}/jobs`)
      .then((response) => response.json())
      .then((data) => this.store.setState('jobsList', data))
      .catch(() => toast.error('Faça Login para ter acesso a todas as vagas'))
      .finally(() => this.store.setLoading(false))
  }

  async postNewJob(body) {
    return await axios
      .post(`${baseUrl}/jobs`, body)
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
      .delete(`${baseUrl}/jobs/${id}`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => toast.error('Erro ao Deletar Vaga'))
      .finally(() => this.store.setLoading(false))
  }
}

export default JobsController
