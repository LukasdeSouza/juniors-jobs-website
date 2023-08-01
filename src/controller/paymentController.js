import axios from 'axios'
import { baseUrlProd } from '../utils/constants'
import { toast } from 'react-hot-toast'


class PaymentController {

  constructor(store) {
    this.store = store
  }

  async checkoutPayment(body, callback) {
    this.store.setLoading(true)

    const response = await fetch(`${baseUrlProd}/payment/create-subscription`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((data) => data.json())

    this.store.setLoading(false)
    this.store.setState('clientSecret', response.clientSecret)
    this.store.setState('subscriptionId', response.subscriptionId)
    callback()
  }


}

export default PaymentController
