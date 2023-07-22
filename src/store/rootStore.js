import { createContext } from 'react'

import JobsStore from './jobsStore'
import UserStore from './userStore'
import PaymentStore from './paymentStore'

class RootStore {
  constructor() {
    this.jobsStore = new JobsStore()
    this.userStore = new UserStore()
    this.paymentStore = new PaymentStore()
  }
}

export { RootStore }

const RootStoreContext = createContext(new RootStore())

export default RootStoreContext
