import { action, makeAutoObservable, observable } from 'mobx'

class UserStore {
  state = {
    userInfo: {},
    _id: '',
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    type: 'person',
    cnpj: '',
    token: '',
    imageUrl: ''
  }
  alert = {
    open: false,
    message: '',
    type: ''
  }
  loading = false

  constructor() {
    makeAutoObservable(this, {
      state: observable,

      setState: action,
      setAlert: action,
      setLoading: action
    })
  }

  setState(key, value) {
    this.state[key] = value
  }

  setAlert(open, type, message) {
    this.alert.open = open

    if (type) {
      this.alert.type = type
      this.alert.message = message
    }
  }

  setLoading(value) {
    this.loading = value
  }
}

export default UserStore
