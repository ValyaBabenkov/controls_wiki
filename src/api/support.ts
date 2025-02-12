import axios from 'axios'

import type { DonateSchema } from '../schemas/donate.schema'
import type { PaymentResponse } from '../types/payment.types'

class SupportApi {
	public async donate(data: DonateSchema) {
		const response = await axios<PaymentResponse>({
			baseURL: process.env['API_URL'],
			url: '/sponsors/donate',
			method: 'POST',
			data
		})

		return response.data
	}
}

export const supportApi = new SupportApi()
