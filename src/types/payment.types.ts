interface Amount {
	value: string
	currency: string
}

interface Recipient {
	account_id: string
	gateway_id: string
}

interface PaymentMethod {
	type: string
	id: string
	saved: boolean
	status: 'active' | 'inactive'
}

interface Confirmation {
	type: 'embedded' | 'redirect'
	confirmation_token: string
}

export interface PaymentResponse {
	id: string
	status: 'pending' | 'success' | 'failed'
	amount: Amount
	description: string
	recipient: Recipient
	payment_method: PaymentMethod
	created_at: string
	confirmation: Confirmation
	test: boolean
	paid: boolean
	refundable: boolean
}
