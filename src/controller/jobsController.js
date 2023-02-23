import axios from 'axios'

class JobsController {
  constructor(store) {
    this.store = store
  }

  async getAllJobs() {
    this.store.setLoading(true)

    return await fetch('https://seek-jobs-website-api.onrender.com/jobs')
      .then(response =>
        response.json())
      .then(data =>
        this.store.setState('jobsList', data))
      .catch(() =>
        this.store.setState('error', true))
      .finally(() =>
        this.store.setLoading(false))
  }

  async postNewJob(body) {
    // this.store.setState('loading', true)
    return await axios.post('https://seek-jobs-website-api.onrender.com/jobs', body)
      .then((response) => {
        this.store.setState('alert', true)
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() =>
        alert('Somente é possível cadastrar nova vaga caso seja uma empresa')
      )
  }

  async deleteJob(id) {
    return await axios.delete(`https://seek-jobs-website-api.onrender.com/jobs/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error))
      .finally(() =>
        this.store.setLoading(false)
      )
  }
}

export default JobsController