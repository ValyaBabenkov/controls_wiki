'use client'

import Link from 'next/link'
import { useRef } from 'react'

import { Confetti, type ConfettiRef } from '../shared/confetti'
import { Button } from '../ui/button'

export function Thanks() {
	const confettiRef = useRef<ConfettiRef>(null)

	return (
		<div className='container flex h-[110vh] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center'>
			<div className='space-y-4'>
				<h1 className='text-4xl font-bold text-foreground sm:text-5xl md:text-6xl'>
					Спасибо за поддержку
				</h1>
				<Confetti
					ref={confettiRef}
					className='absolute left-0 top-0 z-0 size-full'
				/>
				<p className='mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8'>
					{' '}
					Ваша поддержка помогает нам развивать проект и достигать
					новых высот. Благодаря вам мы можем реализовывать важные
					инициативы, улучшать сервис и предлагать больше
					возможностей. Спасибо, что идёте с нами вперёд!
				</p>
				<Button variant='primary' size='lg'>
					<Link href='/'>На главную</Link>
				</Button>
			</div>
		</div>
	)
}
