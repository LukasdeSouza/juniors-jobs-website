import { action, makeAutoObservable, observable } from 'mobx'

class MainStore {
  state = {
    open: false
  }

  constructor() {
    makeAutoObservable(this, {
      state: observable,

      setState: action,
    })
  }

  setState(key, value) {
    this.state[key] = value
  }
}

export default MainStore
