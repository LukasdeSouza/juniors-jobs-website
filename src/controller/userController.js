import axios from 'axios'
import { baseUrl } from '../utils/constants'
import { toast } from 'react-hot-toast'

class UserController {
  constructor(store) {
    this.store = store
  }

  async userRegister(body, callBack) {
    this.store.setLoading(true)

    return await axios
      .post(`${baseUrl}/auth/register`, body, {
        headers:
        {
          // 'content-type': 'text/json',
          'Access-Control-Allow-Origin': "*"
        },
      })
      .then((response) => {
        localStorage.setItem('@token-skj', response.data.userInfo.token)
        this.store.setState('userInfo', response.data.userInfo)
        toast.success('Usuário Cadastrado com Sucesso')
        callBack()
      })
      .catch((error) => {
        toast.error(error.response.data.msg)
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
