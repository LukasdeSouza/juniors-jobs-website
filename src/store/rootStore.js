import { createContext } from "react";
import JobsStore from "./jobsStore";

class RootStore {
  constructor() {
    this.jobsStore = new JobsStore()
  }
}

export { RootStore }

const RootStoreContext = createContext(new RootStore())

export default RootStoreContext