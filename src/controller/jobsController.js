import axios from 'axios'
import { baseUrlProd, baseUrlDev } from '../utils/constants'
import { toast } from 'react-hot-toast'
import { getToken } from '../utils/getToken'

const token = getToken()
class JobsController {
  token = getToken()
  constructor(store) {
    this.store = store
  }

  async getAllJobs() {
    this.store.setLoading(true)

    await fetch(`${baseUrlProd}/jobs`, {
      headers: {
        'Authorization': token
      }
    })
      .then((response) => response.json())
      .then((data) => this.store.setState('jobsList', data))
      .catch(() => console.log('error'))
      .finally(() => this.store.setLoading(false))
  }

  async getJobById(id) {
    this.store.setLoading(true)

    await fetch(`${baseUrlProd}/jobs/${id}`, {
      headers: {
        'Authorization': token
      }
    })
      .then((response) => response.json())
      .then((data) => this.store.setState('job', data))
      .catch(() => console.log('error'))
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

  // async deleteJob(id) {
  //   return await axios
  //     .delete(`${baseUrlProd}/jobs/${id}`)
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => toast.error('Erro ao Deletar Vaga'))
  //     .finally(() => this.store.setLoading(false))
  // }
}

export default JobsController
