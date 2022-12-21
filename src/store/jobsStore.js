import { action, makeAutoObservable, observable } from "mobx";

class JobsStore {

  state = {
    jobsList: [],
    postJobsList: [],
    urlImage: '',
    title: '',
    description: '',
    tecnologies: '',
    salary: '',
    local: '',
    link: '',
    pagination: 0,
    page: 0,
    openDrawer: false,
    error: false
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

export default JobsStore