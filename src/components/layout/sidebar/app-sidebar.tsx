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
			url: '/docs/sponsort/create',
			items: [
				{
					title: 'Описание',
					url: '/docs/refunds/create'
				},
				{
					title: 'Контакты',
					url: '/docs/contacts/contacts'
				},
			]
		},
		{
			title: 'Начало работы',
			url: '/',
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
					url: '/docs/project/team'
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
			url: '/docs/round/checklist',
			items: [
				{
					title: 'Чек-лист',
					url: '/docs/round/checklist'
				},
				{
					title: 'Помещениям',
					url: '/docs/round/floor'
				},
			]
		},
		{
			title: 'FAQ',
			url: '/docs/faq/faq',
			items: [
				{
					title: 'Вопросы',
					url: '/docs/faq/faq'
				}

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
