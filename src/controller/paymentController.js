import axios from 'axios'
import { baseUrl } from '../utils/constants'
import { toast } from 'react-hot-toast'


class PaymentController {

  constructor(store) {
    this.store = store
  }

  async checkoutPayment(body) {
    this.store.setLoading(true)
    console.log(body)

    await
      fetch(`${baseUrl}/payment/create-subscription`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "same-origin",
      })
        .then((response) => console.log(response))
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    // axios
    //   .post(`${baseUrl}/payment/create-subscription`, body)
    //   .then((response) => {
    //     alert('caiu no then')
    //     console.log(response)
    //     this.store.setState('checkoutPayment', data)
    //     this.store.setLoading(false)
    //   })
    //   .catch((error) => {
    //     alert('caiu no erro')
    //     console.log(error)
    //     toast.error('Erro ao efetuar pagamento')
    //     this.store.setLoading(false)
    //   })

  }


}

export default PaymentController
