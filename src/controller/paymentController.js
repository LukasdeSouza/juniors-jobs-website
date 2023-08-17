import axios from 'axios'
import { baseUrlProd, baseUrlDev } from '../utils/constants'
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

    let subscripted = {
      current_period_end: response.subscriptionData.current_period_end,
      current_period_start: response.subscriptionData.current_period_start,
      status: response.subscriptionData?.plan?.active,
      clientSecret: response.clientSecret,
      customerId: response.customerData.id,
      subscriptionId: response.subscriptionId
    }

    await fetch(`${baseUrlProd}/auth/user`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('@token-skj')
      },
      method: 'PATCH',
      body: JSON.stringify({
        'email': localStorage.getItem('@usermail-skj'),
        'subscripted': subscripted
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(updatedData => {
        console.log('Resource updated:', updatedData);
      })
      .catch(error => {
        console.error('Error updating resource:', error);
      });

    this.store.setLoading(false)
    callback()
  }


}

export default PaymentController
