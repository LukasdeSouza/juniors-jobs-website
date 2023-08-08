import axios from 'axios'
import { baseUrlProd, baseUrlDev } from '../utils/constants'
import { toast } from 'react-hot-toast'

class UserController {
  constructor(store) {
    this.store = store
  }

  async userRegister(body, callBack) {
    this.store.setLoading(true)

    return await axios
      .post(`${baseUrlDev}/auth/register`, body, {
        headers: { 'Access-Control-Allow-Origin': "*" },
      })
      .then((response) => {
        localStorage.setItem('@token-skj', response.data.userInfo.token)
        localStorage.setItem('@usermail-skj', response.data.userInfo.email)
        localStorage.setItem('@userid-skj', response.data.userInfo._id)
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
      .post(`${baseUrlDev}/auth`, body)
      .then((response) => {
        if (response.data.msg === 'Login Efetuado com Sucesso') {
          localStorage.setItem('@token-skj', response.data.token)
          localStorage.setItem('@usermail-skj', response.data.userInfo.email)
          localStorage.setItem('@userid-skj', response.data.userInfo._id)
          callBack()
          toast.success('Login Efetuado com Sucesso!')
        } else {
          toast(response.data.msg)
        }
      })
      .catch((error) => {
        toast.error(error.response?.data?.msg)
        this.store.setLoading(false)
      })
      .finally(() => this.store.setLoading(false))
  }

  async getUser(userId) {
    if (userId !== null) {
      await fetch(`${baseUrlDev}/auth/user/${userId}`, {
        headers: {
          'Authorization': localStorage.getItem('@token-skj')
        }
      })
        .then((data) => data.json())
        .then((response) => console.log(response))
    }
  }
}

export default UserController
