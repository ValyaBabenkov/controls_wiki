import type { PropsWithChildren } from 'react'

import { AppSidebar } from '@/src/components/layout/sidebar/app-sidebar'
import {
	SidebarInset,
	SidebarProvider
} from '@/src/components/ui/sidebar'

export default function DocsLayout({ children }: PropsWithChildren<unknown>) {
	return (
			<SidebarProvider>
				<AppSidebar className='pt-16' />
				<SidebarInset>
					<div
						className='fixed right-[-500px] top-[80px] h-[500px] w-[500px] animate-fadeInOut'
						style={{
							boxShadow:
								'-20px 30px 400px rgba(147, 51, 234, 0.3)'
						}}
					/>
					<main className='flex-1 pt-16'>{children}</main>
				</SidebarInset>
			</SidebarProvider>
	)
}
