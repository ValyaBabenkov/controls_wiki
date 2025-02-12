'use client'

import { Loader2 } from 'lucide-react'
import { useParams } from 'next/navigation'
import { Fragment, useEffect, useState } from 'react'

import {
	YooMoneyCheckoutWidgetConfig,
	YooMoneyErrorCallbackResult
} from '@/src/types/yookassa-widget.types'

export function Payment() {
	const { token } = useParams<{ token: string }>()

	const [isPaymentFormLoading, setIsPaymentFormLoading] = useState(true)
	const [isLoadedScript, setIsLoadedScript] = useState(false)

	useEffect(() => {
		const scriptTag = document.createElement('script')
		scriptTag.src =
			'https://yookassa.ru/checkout-widget/v1/checkout-widget.js'
		scriptTag.addEventListener('load', () => {
			setIsLoadedScript(true)
		})
		document.body.appendChild(scriptTag)
	}, [])

	useEffect(() => {
		if (!isLoadedScript) return
		if (!token) return

		const config: YooMoneyCheckoutWidgetConfig = {
			confirmation_token: token,
			return_url: 'https://controlsapp.ru/thanks',
			customization: {
				colors: {
					control_primary: '#00C6FB',
					control_primary_content: '#FFFFFF',
					background: '#F8F8F8',
					border: '#E0E0E0',
					text: '#333333'
				}
			},
			error_callback: (error: YooMoneyErrorCallbackResult) => {
				console.error('Ошибка оплаты:', error.error)
			}
		}

		const checkout = new (window as any).YooMoneyCheckoutWidget(config)

		setIsPaymentFormLoading(false)
		checkout.render('payment-form')
	}, [isLoadedScript, token])

	return (
		<Fragment>
			{isPaymentFormLoading && (
				<div className='flex h-screen items-center justify-center text-lg font-semibold'>
					<Loader2 className='size-10 animate-spin text-[#00C6FB]' />
				</div>
			)}

			<div
				id='payment-form'
				className='mx-auto flex h-[100vh] w-full max-w-lg items-center justify-center'
			/>
		</Fragment>
	)
}
