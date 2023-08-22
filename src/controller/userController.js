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
      .post(`${baseUrlProd}/auth/register`, body, {
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
      .post(`${baseUrlProd}/auth`, body)
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
      await fetch(`${baseUrlProd}/auth/user/${userId}`, {
        headers: {
          'Authorization': localStorage.getItem('@token-skj')
        }
      })
        .then((data) => data.json())
        .then((response) => this.store.setState('userInfo', response))
    }
  }

  async newsLetterRegister(email, callBack) {
    await axios.post(`${baseUrlProd}/newsletter/register`, {
      email
    })
      .then((response) => {
        console.log(response)
        toast.success('Inscrito com Sucesso')
        callBack()
      })
      .catch((error) => {
        toast.error('Não foi possível realizar a inscrição')
      })
  }
}

export default UserController
