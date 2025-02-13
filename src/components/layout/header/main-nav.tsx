'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ModeSwitcher } from '../../shared/mode-switcher'

import { CommandMenu } from './command-menu'
import { Logo } from './logo'

export function MainNav() {
	const pathname = usePathname()

	const isDocsPage = pathname.includes('/docs')

	return (
		<div className='hidden h-16 w-full items-center justify-between md:flex'>
			<div className='flex items-center'>
				<Logo />
				{!isDocsPage && (
					<div className='ml-10 hidden md:block'>
						<div className='flex items-center space-x-8'>
							<Link
								href='#'
								onClick={e => {
									e.preventDefault()
									setTimeout(() => {
										document
											.getElementById('features')
											?.scrollIntoView({
												behavior: 'smooth',
												block: 'start'
											})
									}, 100)
								}}
								className='text-sm text-muted-foreground hover:text-foreground'
							>
								Функции
							</Link>
							{/*<Link*/}
							{/*	href='#'*/}
							{/*	onClick={e => {*/}
							{/*		e.preventDefault()*/}
							{/*		setTimeout(() => {*/}
							{/*			document*/}
							{/*				.getElementById('support')*/}
							{/*				?.scrollIntoView({*/}
							{/*					behavior: 'smooth',*/}
							{/*					block: 'start'*/}
							{/*				})*/}
							{/*		}, 100)*/}
							{/*	}}*/}
							{/*	className='text-sm text-muted-foreground hover:text-foreground'*/}
							{/*>*/}
							{/*	Поддержать проект*/}
							{/*</Link>*/}

							<Link
								href='/docs/getting-started/register'
								className='text-sm text-muted-foreground hover:text-foreground'
							>
								Документация
							</Link>
						</div>
					</div>
				)}
			</div>
			<div className='flex items-center gap-4 text-sm xl:gap-6'>
				<CommandMenu />
				<ModeSwitcher />
			</div>
		</div>
	)
}
