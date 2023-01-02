import { createContext } from "react";

import JobsStore from "./jobsStore";
import UserStore from "./userStore";

class RootStore {
  constructor() {
    this.jobsStore = new JobsStore()
    this.userStore = new UserStore()
  }
}

export { RootStore }

const RootStoreContext = createContext(new RootStore())

export default RootStoreContext