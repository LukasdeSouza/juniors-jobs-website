import axios from 'axios'

class UserController {
  constructor(store) {
    this.store = store
  }

  async userRegister(body) {
    this.store.setLoading(true)

    return await axios.post('https://seek-jobs-website-api.onrender.com/auth/register', body)
      .then((response) => {
        this.store.setAlert(true, 'success', 'Te enviamos a confirmação de Cadastro no seu Email')
        console.log(response)
      })
      .catch((error) => {
        this.store.setAlert(true, 'warning', error.response.data.msg)
        console.log(error)
      })
      .finally(() =>
        this.store.setLoading(false)
      )
  }

  async userLogin(body) {
    this.store.setLoading(true)

    return await axios.post('https://seek-jobs-website-api.onrender.com/auth', body)
      .then((response) => {
        this.store.setAlert(true, 'success', response.data.msg)
        this.store.setState('openDrawer', false)
      })
      .catch((error) => {
        this.store.setState(true, 'error', error.response.data.msg)
        this.store.setState('openDrawer', true)
      })
      .finally(() =>
        this.store.setLoading(false)
      )
  }

}

export default UserController