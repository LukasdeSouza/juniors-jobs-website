import axios from 'axios'
import { baseUrl } from '../utils/constants'


class PaymentController {

  constructor(store) {
    this.store = store
  }

  async checkoutPayment(body) {
    this.store.setLoading(true)
    return await axios
      .post(`${baseUrl}/payment/create-subscription`, body)
      .then((response) => {
        let data = response.json()
        this.store.setState('checkoutPayment', data)
        this.store.setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        this.store.setLoading(false)
      })

  }


}

export default PaymentController
