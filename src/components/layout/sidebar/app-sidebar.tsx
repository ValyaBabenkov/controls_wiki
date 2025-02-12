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
} from '../../ui/sidebar'

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from './collapsible'
import { docsConfig } from '@/src/config/docs.config'

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarContent className='gap-0'>
				{docsConfig.sidebarNav.map(item => {
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
											{item.items?.map(item => (
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
