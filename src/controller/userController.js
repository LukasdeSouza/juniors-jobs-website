import axios from 'axios'

class UserController {
  constructor(store) {
    this.store = store
  }

  async postNewUser(body) {
    this.store.setLoading(true)

    return await axios.post('https://seek-jobs-website-api.onrender.com/auth/register', body)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() =>
        this.store.setLoading(false)
      )
  }
  
}

export default UserController