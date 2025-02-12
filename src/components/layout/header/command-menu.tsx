'use client'

import { type DialogProps } from '@radix-ui/react-dialog'
import { Circle, File } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import * as React from 'react'

import { Button } from '../../ui/button'
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from '../../ui/command'

import { docsConfig } from '@/src/config/docs.config'
import { cn } from '@/src/utils/tw-merge'

export function CommandMenu({ ...props }: DialogProps) {
	const router = useRouter()
	const [open, setOpen] = React.useState(false)
	const { setTheme } = useTheme()

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
				if (
					(e.target instanceof HTMLElement &&
						e.target.isContentEditable) ||
					e.target instanceof HTMLInputElement ||
					e.target instanceof HTMLTextAreaElement ||
					e.target instanceof HTMLSelectElement
				) {
					return
				}

				e.preventDefault()
				setOpen(open => !open)
			}
		}

		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [])

	const runCommand = React.useCallback((command: () => unknown) => {
		setOpen(false)
		command()
	}, [])

	return (
		<>
			<Button
				variant='outline'
				className={cn(
					'relative h-8 w-full justify-start rounded-[0.5rem] bg-transparent text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64'
				)}
				onClick={() => setOpen(true)}
				{...props}
			>
				<span className='hidden lg:inline-flex'>
					Поиск по документации...
				</span>
				<span className='inline-flex lg:hidden'>Поиск...</span>
				<kbd className='pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex'>
					<span className='text-xs'>⌘</span>K
				</kbd>
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder='Введите запрос...' />
				<CommandList>
					<CommandEmpty>Нечего не найдено</CommandEmpty>
					<CommandGroup heading='Ссылки'>
						{docsConfig.mainNav.map(navItem => (
							<CommandItem
								key={navItem.url}
								value={navItem.title}
								onSelect={() => {
									runCommand(() =>
										router.push(navItem.url as string)
									)
								}}
							>
								<File />
								{navItem.title}
							</CommandItem>
						))}
					</CommandGroup>
					{docsConfig.sidebarNav.map(group => (
						<CommandGroup key={group.title} heading={group.title}>
							{group.items?.map(navItem => (
								<CommandItem
									key={navItem.url}
									value={navItem.title}
									onSelect={() => {
										runCommand(() =>
											router.push(navItem.url as string)
										)
									}}
								>
									<div className='mr-2 flex h-4 w-4 items-center justify-center'>
										<Circle className='h-3 w-3' />
									</div>
									{navItem.title}
								</CommandItem>
							))}
						</CommandGroup>
					))}
				</CommandList>
			</CommandDialog>
		</>
	)
}
