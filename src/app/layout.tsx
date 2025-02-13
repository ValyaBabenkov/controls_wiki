import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { Header } from '../components/layout/header/header'
import { TanstackQueryProvider } from '../providers/tanstack-query-provider'
import { ThemeProvider } from '../providers/theme-provider'
import '../styles/globals.css'
import { cn } from '../utils/tw-merge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'ControlsApp by ValyaBabenkov'
}

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<body className={cn('bg-sidebar', inter.className)}>
				<TanstackQueryProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
						enableColorScheme
					>
						<div className='mx-auto w-full border-border/40 dark:border-border md:overflow-hidden'>
							<Header />
							{children}
						</div>
					</ThemeProvider>
				</TanstackQueryProvider>
			</body>
		</html>
	)
}
