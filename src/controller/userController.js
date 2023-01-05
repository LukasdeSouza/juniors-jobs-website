import axios from 'axios'

class UserController {
  constructor(store) {
    this.store = store
  }

  async userRegister(body) {
    this.store.setLoading(true)

    return await axios.post('https://seek-jobs-website-api.onrender.com/auth/register', body)
      .then((response) => {
        this.store.setState('alert', true)
        this.store.setState('openDrawer', false)
        console.log(response)
      })
      .catch((error) => {
        this.store.setState('openDrawer', true)
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
        this.store.setState('alert', true)
        this.store.setState('openDrawer', false)
        this.store.setState('success', response.data.msg)
      })
      .catch((error) => {
        this.store.setState('openDrawer', true)
        this.store.setState('error', error.response.data.msg)
      })
      .finally(() =>
        this.store.setLoading(false)
      )
  }

}

export default UserController