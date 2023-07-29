import axios from 'axios'
import { baseUrl } from '../utils/constants'
import { toast } from 'react-hot-toast'


class PaymentController {

  constructor(store) {
    this.store = store
  }

  async checkoutPayment(body, callback) {
    this.store.setLoading(true)

    const response = await fetch(`${baseUrl}/payment/create-subscription`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((data) => data.json())
    this.store.setState('clientSecret', response.clientSecret)
    this.store.setState('subscriptionId', response.subscriptionId)
    callback()
  }


}

export default PaymentController
