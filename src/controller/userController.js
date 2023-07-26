import axios from 'axios'
import { useNavigate } from 'react-router'
import { baseUrl } from '../utils/constants'
import { toast } from 'react-hot-toast'

class UserController {
  constructor(store) {
    this.store = store
  }

  navigate = useNavigate()

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
        toast.success('Login efetuado com Sucesso!')
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('@sj-name', response.data.userInfo.name)
        this.store.setState('_id', response.data.userInfo._id)
        callBack()
      })
      .catch(() => {
        toast.error('Não foi possível efetuar o login. Tente novamente')
        this.store.setLoading(false)
      })
      .finally(() => this.store.setLoading(false))
  }
}

export default UserController
