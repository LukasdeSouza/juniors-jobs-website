import axios from 'axios'
import { useNavigate } from 'react-router'

class UserController {
  constructor(store) {
    this.store = store
  }

  navigate = useNavigate()

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
        this.store.setState('token', response.data.token)
        this.store.setState('name', response.data.userInfo.name)
        this.store.setState('type', response.data.userInfo.type)
        this.store.setState('_id', response.data.userInfo._id)
        this.store.setState('cnpj', response.data.userInfo.cnpj)
        this.navigate('/splash/userLogged')
      })
      .catch((error) => {
        this.store.setState(true, 'warning', error.response.data.msg)
        console.log(error)
        this.store.setLoading(false)
      })
      .finally(() =>
        this.store.setLoading(false)
      )
  }

}

export default UserController