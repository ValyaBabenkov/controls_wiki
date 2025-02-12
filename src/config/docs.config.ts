import type { MainNavItem, SidebarNavItem } from '../types/nav.types'

export interface DocsConfig {
	mainNav: MainNavItem[]
	sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: 'Начало работы',
			url: '/docs/getting-started/register'
		},
		{
			title: 'Программа',
			url: '/docs/programms'
		},
		{
			title: 'Проекты',
			url: '/docs/projects'
		},
		{
			title: 'Осмотры',
			url: '/docs/rounds/checklists'
		}
	],
	sidebarNav: [
		{
			title: 'О проекте',
			url: '/',
			items: [
				{
					title: 'Контакты',
					url: '/docs/contacts'
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
			url: '/docs/getting-started',
			items: [
				{
					title: 'Регистрация',
					url: '/docs/getting-started/register'
				},
				{
					title: 'Восстановление пароля',
					url: '/docs/getting-started/reset'
				}
			]
		},
		{
			title: 'Программы',
			url: '/docs/programms',
			items: [
				{
					title: 'Управление программами',
					url: '/docs/programms'
				}
			]
		},
		{
			title: 'Проекты',
			url: '/docs/projects',
			items: [
				{
					title: 'Управление проектом',
					url: '/docs/projects'
				},
				{
					title: 'Команда',
					url: '/docs/projects/teams'
				},
				{
					title: 'Справочник помещений',
					url: '/docs/projects/floors'
				},
				{
					title: 'Шаблон чек-листов',
					url: '/docs/projects/checklists'
				}
			]
		},
		{
			title: 'Осмотры',
			url: '/docs/rounds/checklists',
			items: [
				{
					title: 'Чек-лист',
					url: '/docs/rounds/checklists'
				},
				{
					title: 'Помещениям',
					url: '/docs/rounds/floors'
				}
			]
		}
	]
}
