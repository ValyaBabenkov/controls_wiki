import type { Metadata } from 'next'

import { Thanks } from '@/src/components/thanks/thanks'

export const metadata: Metadata = {
	title: 'Спасибо за поддержку!'
}

export default function ThanksPage() {
	return <Thanks />
}
