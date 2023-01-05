import { action, makeAutoObservable, observable } from "mobx";


class UserStore {
  state = {
    _id: "",
    name: '',
    email: "",
    type: "",
    cnpj: "",
    error: "",
    success: ""
  }
  loading = false

  constructor() {
    makeAutoObservable(this, {
      state: observable,

      setState: action,
      setLoading: action,
    })
  }

  setState(key, value) {
    this.state[key] = value
  }

  setLoading(value) {
    this.loading = value
  }


}

export default UserStore