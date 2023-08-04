import { createContext } from 'react'

import JobsStore from './jobsStore'
import UserStore from './userStore'
import PaymentStore from './paymentStore'
import MainStore from './mainStore'

class RootStore {
  constructor() {
    this.mainStore = new MainStore()
    this.jobsStore = new JobsStore()
    this.userStore = new UserStore()
    this.paymentStore = new PaymentStore()
  }
}

export { RootStore }

const RootStoreContext = createContext(new RootStore())

export default RootStoreContext
