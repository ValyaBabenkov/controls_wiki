'use client'

import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

import { Button } from '../ui/button'

export function Hero() {
	return (
		<section className='container flex h-[110vh] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-10 text-center'>
			<div className='space-y-4'>
				<h1 className='bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-normal text-transparent sm:text-5xl md:text-6xl'>
					ControlsApp — интуитивно, <br /> быстро и эффективно
				</h1>
				<p className='mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8'>
					Простое и удобное решение для сбора и контроля замечаний на
					объекте, которое помогает сэкономить время и ресурсы,
					оптимизируя процесс осмотра и управления проектом.
				</p>
				{/* <p className='mx-auto max-w-[42rem] leading-normal'>
					Цель системы — сэкономить время и ресурсы на сбор замечаний
					в рамках осмотра.
				</p> */}
			</div>
			<div className='flex gap-4'>
				<Button variant='primary' size='lg'>
					<Link href='/docs/getting-started/register'>
						Перейти к документации
					</Link>
				</Button>
				<Button variant='outline' size='lg'>
					<Link href='/docs/contacts'>Контакты</Link>
				</Button>
			</div>

			<Link
				href='#'
				onClick={e => {
					e.preventDefault()
					setTimeout(() => {
						document.getElementById('features')?.scrollIntoView({
							behavior: 'smooth',
							block: 'start'
						})
					}, 100)
				}}
				className='animate-bounce duration-1000'
			>
				<ChevronDown className='size-10 text-muted-foreground opacity-70 transition-opacity hover:opacity-100' />
			</Link>
		</section>
	)
}
