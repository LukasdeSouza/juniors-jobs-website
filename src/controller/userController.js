import axios from 'axios'
import { useNavigate } from 'react-router'
import { baseUrl } from '../utils/constants'
import { toast } from 'react-hot-toast'

class UserController {
  constructor(store) {
    this.store = store
  }

  async userRegister(body) {
    this.store.setLoading(true)

    return await axios
      .post(`${baseUrl}/auth/register`, body)
      .then((response) => {
        toast.success('Ótimo! Te enviamos a confirmação por email')
        console.log(response)
      })
      .catch((error) => {
        toast.error('Erro ao criar usuário')
      })
      .finally(() => this.store.setLoading(false))
  }

  async userLogin(body, callBack) {
    this.store.setLoading(true)

    return await axios
      .post(`${baseUrl}/auth`, body)
      .then((response) => {
        if (response.data.msg === 'Login Efetuado com Sucesso') {
          localStorage.setItem('@token-skj', response.data.token)
          this.store.setState('userInfo', response.data.userInfo)
          callBack()
          toast.success('Login Efetuado com Sucesso!')
        } else {
          toast(response.data.msg)
        }
      })
      .catch((error) => {
        toast.error(error.response.data?.msg)
        this.store.setLoading(false)
      })
      .finally(() => this.store.setLoading(false))
  }
}

export default UserController
