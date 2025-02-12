'use client'
import { ChevronRight } from 'lucide-react'
import type { ComponentProps } from 'react'

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail
} from '../../ui/common/sidebar'

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from './collapsible'

export const nav = {
	navMain: [
		{
			title: 'О проекте',
			url: '/',
			items: [
				{
			 		title: 'О приложении',
			 		url: '/'
				},
				{
					title: 'Контакты',
					url: '/docs/contacts/contacts'
				}
			]
			// items: [
			// 	{
			// 		title: 'Описание',
			// 		url: '/docs/refunds/create'
			// 	},
			// 	{
			// 		title: 'Спонсорство',
			// 		url: '/docs/sponsorship/sponsorship'
			// 	},
			// 	{
			// 		title: 'Контакты',
			// 		url: '/docs/contacts/contacts'
			// 	},
			// ]
		},
		{
			title: 'Начало работы',
			url: '/docs/register/register',
			items: [
				{
					title: 'Регистрация',
					url: '/docs/register/register'
				},
				{
					title: 'Восстановление пароля',
					url: '/docs/register/reset'
				}
			]
		},
		{
			title: 'Программа',
			url: '/docs/program',
			items: [
				{
					title: 'Управление программами',
					url: '/docs/program/program'
				}
			]
		},
		{
			title: 'Проект',
			url: '/docs/project/project',
			items: [
				{
					title: 'Управление проектом',
					url: '/docs/project/project'
				},
				{
					title: 'Команда',
					url: '/docs/project/teams'
				},
				{
					title: 'Справочник помещений',
					url: '/docs/project/floors'
				},
				{
					title: 'Шаблон чек-листов',
					url: '/docs/project/checklists'
				}
			]
		},
		{
			title: 'Осмотры',
			url: '/docs/round/checklists',
			items: [
				{
					title: 'Чек-лист',
					url: '/docs/round/checklists'
				},
				{
					title: 'Помещениям',
					url: '/docs/round/floors'
				},
			]
		}
	]
}

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarContent className='gap-0'>
				{nav.navMain.map(item => {
					return (
						<Collapsible
							key={item.title}
							title={item.title}
							defaultOpen
							className='group/collapsible'
						>
							<SidebarGroup>
								<SidebarGroupLabel
									asChild
									className='group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
								>
									<CollapsibleTrigger>
										{item.title}{' '}
										<ChevronRight className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90' />
									</CollapsibleTrigger>
								</SidebarGroupLabel>
								<CollapsibleContent>
									<SidebarGroupContent>
										<SidebarMenu>
											{item.items.map(item => (
												<SidebarMenuItem
													className='ml-4'
													key={item.title}
												>
													<SidebarMenuButton asChild>
														<a href={item.url}>
															{item.title}
														</a>
													</SidebarMenuButton>
												</SidebarMenuItem>
											))}
										</SidebarMenu>
									</SidebarGroupContent>
								</CollapsibleContent>
							</SidebarGroup>
						</Collapsible>
					)
				})}
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	)
}
