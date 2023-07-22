import axios from 'axios'
import { baseUrl } from '../utils/constants'


class PaymentController {

  constructor(store) {
    this.store = store
  }

  async checkoutPayment(body) {
    return await axios
      .post(`${baseUrl}/payment/create-subscription`, body)
      .then((response) => {
        let data = response.json()
        this.store.setState('checkoutPayment', data)
      })
      .catch((error) => {
        console.log(error)
      })

  }


}

export default PaymentController
